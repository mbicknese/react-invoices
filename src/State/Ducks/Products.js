import 'rxjs' // This should be optimized
import { ajax } from 'rxjs/observable/dom/ajax'

/* global API_URL */
import { LOCATION_CHANGE } from 'react-router-redux'
const LOAD = 'react-invoice/products/LOAD'

const initialState = {
  byId: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return { ...state, byId: action.payload.reduce((byId, product) => { byId[product.id] = product; return byId }, {}) }
    default:
      return state
  }
}

export const loadProducts = payload => ({ type: LOAD, payload })

export const loadEpic = action$ =>
  action$.ofType(LOCATION_CHANGE)
    .mergeMap(action =>
      ajax.getJSON(`${API_URL}/products`)
      .map(response => loadProducts(response))
    )
