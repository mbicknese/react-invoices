import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import InvoiceReducer from './InvoiceReducer'

const history = createHistory()
const middleware = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers({
    invoice: InvoiceReducer,
    router: routerReducer
  }),
  composeEnhancers(applyMiddleware(middleware))
)

export default store
export { history }
