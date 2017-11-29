import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router' // Should change this behaviour later

const propTypes = {
  target: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  match: PropTypes.object
}

const NavLink = ({ target, text, match }) => (
  <li className={match.path === target ? 'active' : false}><Link to={target}>{text}</Link></li>
)

NavLink.propTypes = propTypes
export default withRouter(NavLink)
