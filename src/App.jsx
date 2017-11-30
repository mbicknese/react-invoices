import React from 'react'
import Home from '@/Components/Pages/Home'
import Products from '@/Components/Pages/Products'
import Customers from '@/Components/Pages/Customers'
import Invoices from '@/Components/Pages/Invoices'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'App.scss'

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/products' component={Products} />
      <Route path='/customers' component={Customers} />
      <Route path='/invoices' component={Invoices} />
    </div>
  </Router>
)

export default App
