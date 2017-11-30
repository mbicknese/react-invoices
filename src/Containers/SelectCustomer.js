import React from 'react'
import Select from '@/Components/Atoms/Select'

const mockCustomers = [
  { value: 'demio', text: 'Demio' },
  { value: 'mbicknese', text: 'Maarten Bicknese' },
  { value: 'apple', text: 'Apple' }
]

export default () => <Select placeholder='Select a customer' options={mockCustomers} />
