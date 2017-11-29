import React from 'react'
import NavLink from '@/Components/Atoms/NavLink'

const SiteNav = () => (
  <ul className='nav navbar-nav'>
    <NavLink target='/' text='Products' />
    <NavLink target='/' text='Customers' />
    <NavLink target='/' text='Invoices' />
  </ul>
)

export default SiteNav
