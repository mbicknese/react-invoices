import { connect } from 'react-redux'
import InvoiceTable from '@/Components/Organisms/InvoiceTable'

const mapStateToProps = state => ({
  invoices: state.invoices.allIds.map(id => state.invoices.byId[id]),
  customers: state.customers.byId
})

export default connect(mapStateToProps)(InvoiceTable)
