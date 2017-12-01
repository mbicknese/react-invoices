import 'rxjs' // This should be optimized
import { ajax } from 'rxjs/observable/dom/ajax'

import { LOCATION_CHANGE } from 'react-router-redux'
const LOAD = 'react-invoice/customers/LOAD'

const initialState = {
  byId: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return { ...state, byId: action.payload.reduce((byId, customer) => { byId[customer.id] = customer; return byId }, {}) }
    default:
      return state
  }
}

export const loadCustomers = payload => ({ type: LOAD, payload })

export const loadEpic = action$ =>
  action$.ofType(LOCATION_CHANGE)
    .mergeMap(action =>
      ajax.getJSON('http://localhost:8000/api/customers')
      .map(response => loadCustomers(response))
    )
