import React from 'react'
import Plain from '@/Components/Templates/Plain'
import CreateInvoice from '@/Components/Atoms/CreateInvoice'
import InvoiceTable from '@/Containers/InvoiceTable'
import InvoiceModal from '@/Containers/InvoiceModal'

const Invoices = () => (
  <Plain title='Invoices' mainAction={<CreateInvoice />}>
    <InvoiceTable />
    <InvoiceModal />
  </Plain>
)

export default Invoices
