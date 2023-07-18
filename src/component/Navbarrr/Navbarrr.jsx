import React from 'react'
import './Navbarrr.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from "react-router-dom";



const Navbarrr = () => {
    return (
        <div className='main_0'>
            <div >
                {['md'].map((expand) => (
                    <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                        <Container fluid>
                            <div className='logo-div1'>
                                <div>
                                    <NavLink to="/">
                                        <img src="/images/logo.png" alt="" className='logo_img1' />
                                    </NavLink>
                                </div>
                                <div className='logoname1'>
                                    <h4>Mr. Eslam TagEldwal</h4>
                                </div>
                            </div>                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Offcanvas
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <NavLink to="/Contact" className="navstyle">للتواصل و الحجز</NavLink>
                                        <NavDropdown
                                            title="دروسنا"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >

                                            <NavDropdown.Item href="#action4">
                                                <NavLink to="/Secondary1" className="second1">
                                                    الصف الأول الثانوي
                                                </NavLink>

                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">
                                                <NavLink to="/Secondary2" className="second1">
                                                    الصف الثاني الثانوي
                                                </NavLink>
                                            </NavDropdown.Item>
                                        </NavDropdown>

                                        <Nav.Link href="#action1"> من أنا</Nav.Link>
                                        <NavLink to="/" className="home1">الصفحة الرئيسية</NavLink>

                                    </Nav>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </div>
        </div>
    )
}

export default Navbarrr