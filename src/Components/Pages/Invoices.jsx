import React from 'react'
import Plain from '@/Components/Templates/Plain'
import CreateInvoice from '@/Containers/CreateInvoice'
import InvoiceTable from '@/Containers/InvoiceTable'
import InvoiceModal from '@/Containers/InvoiceModal'

const Invoices = () => (
  <Plain title='Invoices' mainAction={<CreateInvoice />}>
    <InvoiceTable emptyAction={<CreateInvoice />} />
    <InvoiceModal />
  </Plain>
)

export default Invoices
