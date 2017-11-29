import React from 'react'

const Hamburger = () => (
  <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
    <span className='sr-only'>Toggle navigation</span>
    <span className='icon-bar' />
    <span className='icon-bar' />
    <span className='icon-bar' />
  </button>
)

export default Hamburger
