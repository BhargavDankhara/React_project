import React from 'react'
// import { Container } from 'react-bootstrap/lib/Tab';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';


function BrandExample() {
    return (
        <>
            {/* <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Col xs="auto">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Container>

            </Navbar> */}
            <div className="container d-flex align-items-center justify-space-between">
                <div className="navbar" >
                    <div className="brand">
                        <h1 class="logo me-auto"><a href="#" className='text-decoration-none text-success'>Mentor</a></h1>
                    </div>
                    <div className="nav">
                        <ul className='d-flex menu  text-decoration-none '>
                            <li class="list-unstyled"><a className=' me-4 fs-4  text-dark text-decoration-none'>Home</a></li>
                            <li class="list-unstyled"><a className=' me-4 fs-4  text-dark text-decoration-none'>Contact</a></li>
                            <li class="list-unstyled"><a className=' me-4 fs-4  text-dark text-decoration-none'>Aboutus</a></li>
                            <li class="list-unstyled"><a className=' me-4 fs-4  text-dark text-decoration-none'>blog</a></li>
                            <li class="list-unstyled"><a className=' me-4 fs-4  text-dark text-decoration-none'>Services</a></li>
                            
                        </ul>
                    </div>

                </div>
            </div>


        </>
    );
}

export default BrandExample;
