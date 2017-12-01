/* global API_URL */
import 'rxjs' // This should be optimized
import { ajax } from 'rxjs/observable/dom/ajax'
import { LOCATION_CHANGE } from 'react-router-redux'

const LOAD = 'react-invoice/invoices/LOAD'

const initialState = {
  byId: {},
  allIds: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        byId: action.payload.reduce((byId, invoice) => { byId[invoice.id] = invoice; return byId }, {}),
        allIds: action.payload.map(invoice => invoice.id)
      }
    default:
      return state
  }
}

export const loadInvoices = payload => ({ type: LOAD, payload })

export const loadEpic = action$ =>
  action$.ofType(LOCATION_CHANGE)
    .mergeMap(action =>
      ajax.getJSON(`${API_URL}/invoices`)
      .map(response => loadInvoices(response))
    )
