import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.array,
  id: PropTypes.string.isRequired
}

const Modal = ({ title, children, id, actions = false }) => (
  <div className='modal fade' id={id}>
    <div className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>{title}</h4>
        </div>
        <div className='modal-body'>
          {children}
        </div>
        {actions && <div className='modal-footer'>
          {actions}
        </div>}
      </div>
    </div>
  </div>
)

Modal.propTypes = propTypes
export default Modal
