import React from 'react'
import Plain from '@/Components/Templates/Plain'
import CreateInvoice from '@/Components/Atoms/CreateInvoice'
import InvoiceTable from '@/Components/Organisms/InvoiceTable'

const Invoices = () => (
  <Plain title='Invoices' mainAction={<CreateInvoice />}>
    <InvoiceTable />
  </Plain>
)

export default Invoices
