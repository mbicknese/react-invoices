import React from 'react'
import SiteNav from '@/Components/Molecules/SiteNav'
import Hamburger from '@/Components/Atoms/Hamburger'
import SiteTitle from '@/Components/Atoms/SiteTitle'

const SiteHeader = () => (
  <nav className='navbar navbar-default navbar-static-top'>
    <div className='container'>
      <div className='navbar-header'>
        <Hamburger />
        <SiteTitle />
      </div>
      <div id='navbar' className='navbar-collapse collapse'>
        <SiteNav />
      </div>
    </div>
  </nav>
)

export default SiteHeader
