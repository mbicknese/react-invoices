import React from 'react'
import PropTypes from 'prop-types'
import InvoiceRow from '@/Components/Molecules/InvoiceRow'

const propTypes = {
  emptyAction: PropTypes.element.isRequired,
  invoices: PropTypes.array,
  customers: PropTypes.object,
  onRowClick: PropTypes.func
}

const InvoiceTable = ({ emptyAction, onRowClick, invoices = [], customers = {} }) => (
  <article className='invoice-table__article'>
    <header className='invoice-table__header'>
      <div className='row'>
        <div className='col-sm-4 invoice-table__column-name'>Invoice #</div>
        <div className='col-sm-4 invoice-table__column-name'>Customer</div>
        <div className='col-sm-2 invoice-table__column-name'>Discount</div>
        <div className='col-sm-2 invoice-table__column-name text-right'>Total</div>
      </div>
    </header>
    <div className={'invoice-table__body' + (invoices.length ? '' : ' invoice-table__body--empty')}>
      {
        invoices.length
        ? invoices.map(invoice =>
          <InvoiceRow customer={customers[invoice.customer_id]} {...invoice} key={invoice.id} onClick={onRowClick} />
          )
        : <div className='invoice-table__new'><p>There are no invoices</p>{emptyAction}</div>
      }
    </div>
  </article>
)
InvoiceTable.propTypes = propTypes

export default InvoiceTable
