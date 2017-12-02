/* global API_URL */
/* eslint-env jquery */
import 'rxjs' // This should be optimized
import { ajax } from 'rxjs/observable/dom/ajax'
import { LOCATION_CHANGE } from 'react-router-redux'

const LOAD = 'react-invoice/invoices/LOAD'
const OPEN = 'react-invoice/invoices/OPEN'
const UPDATE = 'react-invoice/invoices/UPDATE'
const UPDATE_SUCCESS = 'react-invoice/invoices/UPDATE_SUCCESS'

const initialState = {
  byId: {},
  allIds: [],
  openId: undefined
}

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
        openId: action.payload
      }
    case UPDATE:
      Object.assign(state.byId[action.payload.id], action.payload)
      return { ...state }
    default:
      return state
  }
}

export const loadInvoices = payload => ({ type: LOAD, payload })
export const openInvoice = payload => ({ type: OPEN, payload })
export const updateInvoice = payload => ({ type: UPDATE, payload })
const updateInvoiceSuccess = payload => ({ type: UPDATE_SUCCESS, payload })

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
      .map(response => updateInvoiceSuccess())
    )
export const updateSuccessEpic = action$ =>
  action$.ofType(UPDATE_SUCCESS)
    .mergeMap(() => { $('.modal').modal('hide'); return [] }) // Got to read into rxjs/redux-observable on not returning a stream
