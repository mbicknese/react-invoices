import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func
}

const Select = ({ options, placeholder = false, value = false, onChange = () => {} }) => (
  <select className='form-control' value={value} onChange={onChange}>
    {placeholder && <option value=''>{placeholder}</option>}
    {options.map(({ value, text }) => (<option value={value} key={value}>{text}</option>))}
  </select>
)
Select.propTypes = propTypes

export default Select
