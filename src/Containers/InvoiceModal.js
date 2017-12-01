import { connect } from 'react-redux'
import InvoiceModal from '@/Components/Organisms/InvoiceModal'

const mapStateToProps = state => ({
  customers: state.customers.byId,
  total: state.invoices.openId ? state.invoices.byId[state.invoices.openId].total : 0,
  discount: state.invoices.openId ? state.invoices.byId[state.invoices.openId].discount : 0,
  customerId: state.invoices.openId ? state.invoices.byId[state.invoices.openId]['customer_id'] : 0
})
export default connect(
  mapStateToProps
)(InvoiceModal)
