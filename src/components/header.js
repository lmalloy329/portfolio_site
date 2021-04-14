import * as React from "react"
import PropTypes from "prop-types"

import {Jumbotron} from 'react-bootstrap'
import header from "../images/header.jpeg"

const Header = ({ siteTitle }) => ( 
  <header className="bg-dark">
    <Jumbotron fluidstyle={{ backgroundImage: header, backgroundSize: 'cover' }}>
      
    </Jumbotron>
  </header>
 
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
