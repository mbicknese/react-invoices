import React from 'react'
import PropTypes from 'prop-types'
import CreateInvoice from '@/Components/Atoms/CreateInvoice'

const propTypes = {
  invoices: PropTypes.array
}

const InvoiceTable = ({ invoices = [] }) => (
  <article className='invoice-table__article'>
    <header className='invoice-table__header'>
      <div className='row'>
        <div className='col-sm-4 invoice-table__column-name'>Invoice #</div>
        <div className='col-sm-4 invoice-table__column-name'>Customer</div>
        <div className='col-sm-2 invoice-table__column-name'>Discount</div>
        <div className='col-sm-2 invoice-table__column-name text-right'>Total</div>
      </div>
    </header>
    <div className='invoice-table__body'>
      {
        invoices.length
        ? <div>Invoices</div>
        : <div className='invoice-table__new'><p>There are no invoices</p><CreateInvoice /></div>
      }
    </div>
  </article>
)

export default InvoiceTable
