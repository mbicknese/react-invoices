import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  headerLevel: PropTypes.number,
  address: PropTypes.string,
  phone: PropTypes.string
}

const ContactInfo = ({ headerLevel = 5, address = false, phone = false }) => {
  const CustomHeading = `h${headerLevel}`

  return (
    <div>
      {address && <div>
        <CustomHeading>Address</CustomHeading>
        <p>{address}</p>
      </div>}
      {phone && <div>
        <CustomHeading>Phone</CustomHeading>
        <p>{phone}</p>
      </div>}
    </div>
  )
}
ContactInfo.propTypes = propTypes

export default ContactInfo
