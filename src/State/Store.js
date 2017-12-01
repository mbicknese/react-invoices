import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import { createEpicMiddleware } from 'redux-observable'
import * as reducers from './Ducks'
import { loadEpic as loadInvoices } from './Ducks/Invoices'
import { loadEpic as loadCustomers } from './Ducks/Customers'
import { loadEpic as loadProducts } from './Ducks/Products'

const epicMiddleware = [
  createEpicMiddleware(loadInvoices),
  createEpicMiddleware(loadCustomers),
  createEpicMiddleware(loadProducts)
]
const history = createHistory()
const routerMiddleware = createRouterMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers({ ...reducers, router: routerReducer }),
  composeEnhancers(applyMiddleware(routerMiddleware, ...epicMiddleware))
)

export default store
export { history }
