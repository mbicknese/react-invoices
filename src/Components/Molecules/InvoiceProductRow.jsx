import React from 'react'
import PropTypes from 'prop-types'
import Money from '@/Components/Atoms/Money'

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onRemove: PropTypes.func
}

const InvoiceProductRow = ({ id, name, price, quantity, onRemove = () => {} }) => (
  <div className='row product-table__row'>
    <div className='col-sm-5'>{name}</div>
    <div className='col-sm-2 text-right'><Money amount={price} /></div>
    <div className='col-sm-2 text-center'>{quantity}</div>
    <div className='col-sm-3'>
      <button onClick={() => onRemove(id)} type='button' className='btn btn-xs btn-danger'>Remove product</button>
    </div>
  </div>
)

InvoiceProductRow.propTypes = propTypes
export default InvoiceProductRow
