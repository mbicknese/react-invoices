import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CreateInvoice from '@/Components/Atoms/CreateInvoice'
import { openInvoice } from '@/State/Ducks/Invoices'

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(openInvoice, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(CreateInvoice)
