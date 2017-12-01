import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  amount: PropTypes.number.isRequired
}

const Money = ({ amount }) => (
  <span>${amount.toFixed(2)}</span>
)

Money.propTypes = propTypes
export default Money
