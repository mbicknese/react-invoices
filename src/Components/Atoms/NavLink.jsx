import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  target: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

const NavLink = ({ target, text }) => (
  <li><a href={target}>{text}</a></li>
)

NavLink.propTypes = propTypes
export default NavLink
