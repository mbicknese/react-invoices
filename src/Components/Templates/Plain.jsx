import React from 'react'
import SiteHeader from '@/Components/Organisms/SiteHeader'
import PropTypes from 'prop-types'

const propTypes = {
  title: PropTypes.string.isRequired
}

const Plain = ({ title }) => (
  <div>
    <SiteHeader />
    <div className='container'>
      <h1>{title}</h1>
    </div>
  </div>
)

Plain.propTypes = propTypes
export default Plain
