import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string
}

const Select = ({ options, placeholder = false }) => (
  <select className='form-control'>
    {placeholder && <option>{placeholder}</option>}
    {options.map((option) => (<option value={option.value} key={option.value}>{option.text}</option>))}
  </select>
)
Select.propTypes = propTypes

export default Select
