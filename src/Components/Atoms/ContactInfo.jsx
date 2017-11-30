import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  headerLevel: PropTypes.number,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}

const ContactInfo = ({ headerLevel = 5, address, phone }) => {
  const CustomHeading = `h${headerLevel}`

  return (
    <div>
      <CustomHeading>Address</CustomHeading>
      <p>{address}</p>
      <CustomHeading>Phone</CustomHeading>
      <p>{phone}</p>
    </div>
  )
}
ContactInfo.propTypes = propTypes

export default ContactInfo
