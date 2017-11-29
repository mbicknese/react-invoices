import React from 'react'
import NavLink from '@/Components/Atoms/NavLink'

const SiteNav = () => (
  <ul className='nav navbar-nav'>
    <NavLink target='/products' text='Products' />
    <NavLink target='/customers' text='Customers' />
    <NavLink target='/invoices' text='Invoices' />
  </ul>
)

export default SiteNav
