/* eslint-env jquery */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.array
}

class Modal extends Component {
  componentDidMount () {
    $(this.element).appendTo('body')
  }

  render () {
    const { title, children, actions = false } = this.props
    return (
      <div className='modal fade' ref={c => this.element = c}>
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
  }
}

Modal.propTypes = propTypes
export default Modal
