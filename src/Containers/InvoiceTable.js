import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InvoiceTable from '@/Components/Organisms/InvoiceTable'
import { openInvoice } from '@/State/Ducks/Invoices'

const mapStateToProps = state => ({
  invoices: state.invoices.allIds.map(id => state.invoices.byId[id]),
  customers: state.customers.byId
})
const mapDispatchToProps = dispatch => ({
  onRowClick: bindActionCreators(openInvoice, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceTable)
