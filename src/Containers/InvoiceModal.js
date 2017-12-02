import { connect } from 'react-redux'
import InvoiceModal from '@/Components/Organisms/InvoiceModal'
import { updateInvoice, createInvoice } from '@/State/Ducks/Invoices'

const mapStateToProps = state => ({
  customers: state.customers.byId,
  products: state.products.byId,
  total: state.invoices.openId ? state.invoices.byId[state.invoices.openId].total : 0,
  discount: state.invoices.openId ? state.invoices.byId[state.invoices.openId].discount : 0,
  customerId: state.invoices.openId ? state.invoices.byId[state.invoices.openId]['customer_id'] : 0,
  id: state.invoices.openId,
  error: state.invoices.error
})
const mapDispatchToProps = dispatch => ({
  onSave: (payload) => {
    if (payload.id) {
      return dispatch(updateInvoice(payload))
    }
    return dispatch(createInvoice(payload))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceModal)
