import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  id: PropTypes.number.isRequired,
  customer: PropTypes.object.isRequired,
  discount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onClick: PropTypes.func
}

class InvoiceRow extends Component {
  constructor () {
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.props.onClick(this.props.id)
  }

  render () {
    const { id, customer, discount, total } = this.props
    return (
      <div className='invoice-table__row' onClick={this.onClick} data-toggle='modal' data-target='#invoice-modal'>
        <div className='row'>
          <div className='col-sm-4'>Invoice # {id}</div>
          <div className='col-sm-4'>{customer.name}</div>
          <div className='col-sm-2'>{discount}%</div>
          <div className='col-sm-2 text-right'>${total}</div>
        </div>
      </div>
    )
  }
}

InvoiceRow.propTypes = propTypes
export default InvoiceRow
