import React from 'react'
import SiteHeader from '@/Components/Organisms/SiteHeader'
import PropTypes from 'prop-types'

const propTypes = {
  title: PropTypes.string.isRequired,
  mainAction: PropTypes.element
}

const Plain = ({ title, mainAction = false, children }) => (
  <div>
    <SiteHeader />
    <div className='container'>
      <header className='row'>
        <div className='col-sm-8'>
          <h1 className='page__title'>{title}</h1>
        </div>
        {mainAction && <div className='col-sm-4 text-right'>{mainAction}</div>}
      </header>
      <main>
        {children}
      </main>
    </div>
  </div>
)

Plain.propTypes = propTypes
export default Plain
