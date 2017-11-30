import { LOCATION_CHANGE } from 'react-router-redux'

const initialState = {
  customers: [],
  invoices: [],
  products: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      if (action.payload.pathname === '/invoices') {
        return { ...state, showing: true }
      }
      return { ...state, showing: false }
    default:
      return state
  }
}
