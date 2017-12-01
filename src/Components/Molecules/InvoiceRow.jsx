import React from 'react'

const InvoiceRow = ({ id, customer, discount, total }) => (
  <div className='invoice-table__row'>
    <div className='row'>
      <div className='col-sm-4'>Invoice # {id}</div>
      <div className='col-sm-4'>{customer.name}</div>
      <div className='col-sm-2'>{discount}%</div>
      <div className='col-sm-2 text-right'>${total}</div>
    </div>
  </div>
)

export default InvoiceRow
