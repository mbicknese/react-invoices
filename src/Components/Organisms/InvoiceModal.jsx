import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from '@/Components/Atoms/Modal'
import ContactInfo from '@/Components/Atoms/ContactInfo'
import Select from '@/Components/Atoms/Select'
// import SelectCustomer from '@/Containers/SelectCustomer'

const propTypes = {
  customers: PropTypes.object.isRequired,
  discount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  customerId: PropTypes.number.isRequired
}

class InvoiceModal extends Component {
  renderActions () {
    return [
      <button className='btn btn-info' key='save'>Save invoice</button>,
      <button className='btn btn-danger' key='delete'>Delete invoice</button>
    ]
  }

  render () {
    const { customers, total, discount, customerId } = this.props
    return (
      <Modal title='Add new invoice' actions={this.renderActions()} id='invoice-modal'>
        <form className='invoice-form'>
          <div className='row'>
            <div className='col-xs-6'>
              <h5>Customer</h5>
              <Select
                placeholder='Select a customer'
                value={customerId}
                options={Object.entries(customers).map(([_, {id, name}]) => ({ value: id, text: name }))}
              />
            </div>
            <div className='col-xs-4 text-right pull-right'>
              {customers[customerId] && <ContactInfo address={customers[customerId].address} phone={customers[customerId].phone} />}
            </div>
          </div>
          <h5>Products</h5>
          <div className='product-table'>
            <header className='product-table__header'>
              <div className='row'>
                <div className='col-sm-5 product-table__column-name'>Name</div>
                <div className='col-sm-2 product-table__column-name text-right'>Price</div>
                <div className='col-sm-2 product-table__column-name text-center'>Quantity</div>
                <div className='col-sm-3 product-table__column-name text-center'>Action</div>
              </div>
            </header>
            <div className='row product-table__row'>
              <div className='col-sm-5'><select className='form-control'><option>Select A Product</option></select></div>
              <div className='col-sm-2 text-right'>0.00</div>
              <div className='col-sm-2'><input type='text' className='form-control  text-center' /></div>
              <div className='col-sm-3 text-center'><button type='button' className='btn btn-xs btn-success btn-block'>Add product</button></div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 pull-right'>
              <div className='summary-table'>
                <header className='summary-table__header'>
                  <div className='row'>
                    <div className='col-sm-6 summary-table__column-name'>Discount</div>
                    <div className='col-sm-6 summary-table__column-name text-right'>Total</div>
                  </div>
                </header>
                <div className='row summary-table__row'>
                  <div className='col-sm-6'>
                    <div className='input-group'>
                      <input className='form-control text-center' value={discount} /><span className='input-group-addon'>%</span>
                    </div>
                  </div>
                  <div className='col-sm-6 text-right'>
                    <span className='summary-table__amount'>${total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    )
  }
}

InvoiceModal.propTypes = propTypes
export default InvoiceModal
