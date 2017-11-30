import React, { Component } from 'react'
import InvoiceModal from '@/Components/Organisms/InvoiceModal'

class CreateInvoice extends Component {
  constructor () {
    super()
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    $(this.modalDiv.element).modal({show: true})
  }

  render () {
    return (
      <div>
        <button className='btn btn-success' onClick={this.openModal}>Create new invoice</button>
        <InvoiceModal ref={c => this.modalDiv = c} />
      </div>
    )
  }
}

export default CreateInvoice
