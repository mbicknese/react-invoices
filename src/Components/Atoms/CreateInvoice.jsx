import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  action: PropTypes.func
}

const CreateInvoice = ({ action = () => {} }) => (
  <button className='btn btn-success' data-toggle='modal' data-target='#invoice-modal' onClick={() => action(null)}>
    Create new invoice
  </button>
)

CreateInvoice.propTypes = propTypes
export default CreateInvoice
