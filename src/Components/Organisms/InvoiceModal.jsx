import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from '@/Components/Atoms/Modal'
import ContactInfo from '@/Components/Atoms/ContactInfo'
import Select from '@/Components/Atoms/Select'
import InvoiceProductRow from '@/Components/Molecules/InvoiceProductRow'
import Money from '@/Components/Atoms/Money'

const propTypes = {
  customers: PropTypes.object.isRequired,
  discount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  customerId: PropTypes.number.isRequired,
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
  id: PropTypes.number,
  error: PropTypes.string
}

class InvoiceModal extends Component {
  constructor () {
    super()
    this.addProduct = this.addProduct.bind(this)
    this.onCustomerChange = this.onCustomerChange.bind(this)
    this.onDiscountChange = this.onDiscountChange.bind(this)
    this.onProductRemove = this.onProductRemove.bind(this)
    this.onProductChange = this.onProductChange.bind(this)
    this.onQuantityChange = this.onQuantityChange.bind(this)
    this.onSave = this.onSave.bind(this)
    this.onTotalChange = this.onTotalChange.bind(this)
    this.state = {
      total: 0,
      discount: 0,
      customerId: undefined,
      newProduct: { id: undefined, quantity: 1 },
      invoiceProducts: [],
      busy: false
    }
  }

  componentWillReceiveProps ({ total, discount, customerId }) {
    this.setState({
      total,
      discount,
      customerId,
      busy: false
    })
  }

  addProduct () {
    this.setState(({ invoiceProducts, newProduct }) => {
      const existingProduct = invoiceProducts.filter(({ id }) => id === newProduct.id)
      if (existingProduct.length) {
        newProduct.quantity = parseInt(newProduct.quantity) + parseInt(existingProduct[0].quantity)
        invoiceProducts.splice(invoiceProducts.indexOf(existingProduct), 1)
      }
      return {
        invoiceProducts: [...invoiceProducts, newProduct],
        newProduct: { id: undefined, quantity: 1 }
      }
    })
    this.onTotalChange()
  }
  onCustomerChange (event) {
    this.setState({ customerId: event.target.value })
  }
  onDiscountChange (event) {
    // Does not filter discount > 100 because one might make a refund invoice (200%)
    this.setState({ discount: Math.max(0, event.target.value) })
    this.onTotalChange()
  }
  onProductRemove (idToRemove) {
    this.setState(prevState => ({
      invoiceProducts: prevState.invoiceProducts.filter(({ id }) => id !== idToRemove)
    }))
    this.onTotalChange()
  }
  onProductChange (event) {
    this.setState({ newProduct: {
      id: event.target.value !== '' ? event.target.value : undefined,
      quantity: 1
    }})
  }
  onQuantityChange (event) {
    const quantity = parseInt(event.target.value)
    this.setState(prevState => ({ newProduct: {
      id: prevState.newProduct.id,
      quantity
    }}))
  }
  onSave () {
    this.setState({ busy: true })
    const { total, discount, customerId } = this.state
    this.props.onSave({
      total,
      discount,
      customer_id: customerId,
      id: this.props.id
    })
  }
  onTotalChange () {
    this.setState(({ discount, invoiceProducts }) => ({
      total: ((100 - discount) / 100) * invoiceProducts.reduce((total, { id, quantity }) => total + quantity * this.props.products[id].price, 0)
    }))
  }

  renderActions () {
    if (!this.state.busy) {
      return [
        <button className='btn btn-info' key='save' onClick={this.onSave}>Save invoice</button>,
        this.props.id !== null ? <button className='btn btn-danger' key='delete' onClick={() => this.props.onDelete(this.props.id)}>Delete invoice</button> : false
      ]
    }
    return [<p key='saving'>Saving ...</p>]
  }

  renderError () {
    return (
      <div className='alert alert-danger' role='alert'>
        <span className='sr-only'>Error:</span>
        {this.props.error}
      </div>
    )
  }

  render () {
    const { total, discount, customerId, newProduct, invoiceProducts } = this.state
    const { customers, products, error } = this.props
    return (
      <Modal title='Add new invoice' actions={this.renderActions()} id='invoice-modal'>
        <form className='invoice-form'>
          {error && this.renderError()}
          <div className='row'>
            <div className='col-xs-6'>
              <h5>Customer</h5>
              <Select
                placeholder='Select a customer'
                value={customerId}
                options={Object.entries(customers).map(([_, {id, name}]) => ({ value: id, text: name }))}
                onChange={this.onCustomerChange}
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
            {invoiceProducts.map(({id, quantity}) => <InvoiceProductRow id={id} price={products[id].price} name={products[id].name} quantity={quantity} key={id} onRemove={this.onProductRemove} />)}
            <div className='row product-table__row'>
              <div className='col-sm-5'>
                <Select
                  placeholder='Select a product'
                  value={newProduct.id}
                  options={Object.entries(products).map(([_, {id, name}]) => ({ value: id, text: name }))}
                  onChange={this.onProductChange}
                />
              </div>
              <div className='col-sm-2 text-right'>{newProduct.id ? products[newProduct.id].price : '-'}</div>
              <div className='col-sm-2'>
                <input type='text' className='form-control text-center' value={newProduct.quantity} onChange={this.onQuantityChange} />
              </div>
              <div className='col-sm-3 text-center'>
                <button type='button' disabled={!newProduct.id} className='btn btn-xs btn-success btn-block' onClick={this.addProduct}>Add product</button>
              </div>
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
                      <input type='text' className='form-control text-center' value={discount} onChange={this.onDiscountChange} /><span className='input-group-addon'>%</span>
                    </div>
                  </div>
                  <div className='col-sm-6 text-right'>
                    <span className='summary-table__amount'><Money amount={total} /></span>
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
