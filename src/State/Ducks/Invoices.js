/* global API_URL */
/* eslint-env jquery */

/**
 *  Updating an invoice:
 *   1. Click invoice
 *   2. Dispatch OPEN with correct id
 *   3. Show modal with data retrieved through id
 *   4. User input / store invoice in local state
 *   5. Click save
 *   6. Dispatch UPDATE
 *   7. Send PUT request
 *   8. On response
 *     success
 *       1. dispatch WRITE_SUCCESS
 *       2. write response to state
 *       3. close modal
 *     error
 *       1. dispatch WRITE_ERROR
 *       2. display alert
 */

import { Observable } from 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'
import { LOCATION_CHANGE } from 'react-router-redux'

const LOAD = 'react-invoice/invoices/LOAD'
const OPEN = 'react-invoice/invoices/OPEN'
const UPDATE = 'react-invoice/invoices/UPDATE'
const CREATE = 'react-invoice/invoices/CREATE'
const DELETE = 'react-invoice/invoices/DELETE'
const WRITE_SUCCESS = 'react-invoice/invoices/WRITE_SUCCESS'
const WRITE_ERROR = 'react-invoice/invoices/WRITE_ERROR'

const initialState = {
  byId: {},
  allIds: [],
  openId: undefined,
  error: undefined
}

const payloadToInvoice = ({ id, total, discount, customer_id, createdAt, updatedAt }) => ({
  id: id * 1,
  total: total * 1,
  discount: discount * 1,
  customer_id: customer_id * 1,
  createdAt,
  updatedAt
})

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        byId: action.payload.reduce((byId, invoice) => { byId[invoice.id] = invoice; return byId }, {}),
        allIds: action.payload.map(invoice => invoice.id)
      }
    case OPEN:
      return {
        ...state,
        openId: action.payload,
        error: undefined
      }
    case DELETE:
      delete state.byId[action.payload]
      state.allIds.splice(state.allIds.indexOf(action.payload), 1)
      return { ...state, openId: null }
    case WRITE_SUCCESS:
      state.byId[action.payload.id] = payloadToInvoice(action.payload)
      if (state.allIds.indexOf(action.payload.id) === -1) { state.allIds.push(action.payload.id) }
      return { ...state, openId: action.payload.id }
    case WRITE_ERROR:
      return {
        ...state,
        error: 'Could not save invoice, please try again later.'
      }
    default:
      return state
  }
}

export const loadInvoices = payload => ({ type: LOAD, payload })
export const openInvoice = payload => ({ type: OPEN, payload })
export const updateInvoice = payload => ({ type: UPDATE, payload })
export const createInvoice = payload => ({ type: CREATE, payload })
export const deleteInvoice = payload => ({ type: DELETE, payload })
const writeInvoiceSuccess = payload => ({ type: WRITE_SUCCESS, payload })

export const loadEpic = action$ =>
  action$.ofType(LOCATION_CHANGE)
    .mergeMap(action =>
      ajax.getJSON(`${API_URL}/invoices`)
      .map(response => loadInvoices(response))
    )
export const updateEpic = action$ =>
  action$.ofType(UPDATE)
    .mergeMap(action =>
      ajax.put(`${API_URL}/invoices/${action.payload.id}`, action.payload)
      .map(response => writeInvoiceSuccess(response.response))
      .catch(() => Observable.of({ type: WRITE_ERROR }))
    )
export const createEpic = action$ =>
  action$.ofType(CREATE)
    .mergeMap(action =>
      ajax.post(`${API_URL}/invoices`, action.payload)
      .map(response => writeInvoiceSuccess(response.response))
      .catch(() => Observable.of({ type: WRITE_ERROR }))
    )
export const deleteEpic = action$ =>
  action$.ofType(DELETE)
    .mergeMap(action => {
      $('.modal').modal('hide')
      return ajax.delete(`${API_URL}/invoices/${action.payload}`).mergeMap(() => [])
    }
  )
export const writeEpic = action$ =>
  action$.ofType(WRITE_SUCCESS)
    .mergeMap(response => {
      $('.modal').modal('hide')
      return []
    }) // Got to read into rxjs/redux-observable on not returning a stream
