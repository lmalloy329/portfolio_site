import React from "react"
import PropTypes from "prop-types"
import * as RiIcons from "react-icons/ri"
import { Link } from "gatsby"
import styled from "styled-components"
// import {Container, Navbar, Nav} from 'react-bootstrap'
const Navi = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  `
  const NavIcon = styled(Link)`
    margin-left: 2rem;
    color: white;
    height: 80px
    display:flex;
    justify-content:flex-start;
    align-items: center
    `
  const SidebarNav = styled.nav`
    background: background: #15171c;
    width: 250 px;
    height: 100vh
    `
  const SideBarWrap = styled.div `
    width: 100%
    `

const Navigation = ({ siteTitle }) => ( 
  <>
  <Navi>
    <NavIcon to="#">
      <RiIcons.RiMenu4Line size = '40'/>
    </NavIcon>
  </Navi>
  <SidebarNav>
    <SideBarWrap>
    <NavIcon to="#">
      <RiIcons.RiMenu4Line size = '40'/>
    </NavIcon>
    </SideBarWrap>
  </SidebarNav>
  </>
  // <header className="bg-dark">
  //   <Container >
  //     <Navbar expand="md" bg="dark" variant="dark">
  //       <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
  //       <Navbar.Toggle aria-controls="navbarResponsive"/>
  //       <Navbar.Collapse id="navbarResponsive">
  //         <Nav className="ml-auto">
  //           <Nav.Item className="ml-auto">
  //             <Link to="/page-2" className="nav-link" activeClassName="active">Page 2</Link>
  //           </Nav.Item>
  //           <Nav.Item className="ml-auto">
  //             <Link to="/page-2" className="nav-link" activeClassName="active">Page 2</Link>
  //           </Nav.Item>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Navbar>
  //   </Container> 
  // </header>
 
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
