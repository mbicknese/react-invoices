import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

const Select = ({ options, placeholder = false, value = false }) => (
  <select className='form-control' value={value}>
    {placeholder && <option>{placeholder}</option>}
    {options.map(({ value, text }) => (<option value={value} key={value}>{text}</option>))}
  </select>
)
Select.propTypes = propTypes

export default Select
