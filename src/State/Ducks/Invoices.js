/* global API_URL */
import 'rxjs' // This should be optimized
import { ajax } from 'rxjs/observable/dom/ajax'
import { LOCATION_CHANGE } from 'react-router-redux'

const LOAD = 'react-invoice/invoices/LOAD'
const OPEN = 'react-invoice/invoices/OPEN'

const initialState = {
  byId: {},
  allIds: [],
  openId: false
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
    default:
      return state
  }
}

export const loadInvoices = payload => ({ type: LOAD, payload })
export const openInvoice = payload => ({ type: OPEN, payload })

export const loadEpic = action$ =>
  action$.ofType(LOCATION_CHANGE)
    .mergeMap(action =>
      ajax.getJSON(`${API_URL}/invoices`)
      .map(response => loadInvoices(response))
    )
