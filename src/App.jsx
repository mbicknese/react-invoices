import React from 'react'
import Home from '@/Components/Pages/Home'
import Products from '@/Components/Pages/Products'
import Customers from '@/Components/Pages/Customers'
import Invoices from '@/Components/Pages/Invoices'
import { Route } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import store, { history } from './State/Store.js'
import { Provider } from 'react-redux'

import 'App.scss'

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/customers' component={Customers} />
        <Route path='/invoices' component={Invoices} />
      </div>
    </Router>
  </Provider>
)

export default App
