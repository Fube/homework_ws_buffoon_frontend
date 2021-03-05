import { Navbar, Nav } from "react-bootstrap"

const Navigation = () => {

    return (
        <Navbar expand="lg" style={{ backgroundColor: '#303538' }}>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#signup" className="nav-text">Signup</Nav.Link>
                    <Nav.Link href="#login" className="nav-text">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;