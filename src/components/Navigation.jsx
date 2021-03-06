import { useEffect } from "react";
import { Navbar, Nav, Image } from "react-bootstrap"
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { login } from "../redux/actions";

const Navigation = () => {

    const { isLoggedIn, user } = useSelector(s=>s);

    return (
        <Navbar expand="lg" style={{ backgroundColor: '#303538' }}>
            <Navbar.Brand>
                <Link to="/">
                    <Image width="64" src="https://i.pinimg.com/originals/fb/32/06/fb320634f358a34f5099d8903af5c8c5.png"/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {
                        (
                            isLoggedIn && user.username?
                            <span className="nav-text">Welcome back {user.username}</span>:
                            [
                                <Nav.Link className="nav-text">
                                    <Link>
                                        Signup
                                    </Link>
                                </Nav.Link>,
                                <Nav.Link href="#login" className="nav-text">
                                    <Link to="/Login">
                                        Login
                                    </Link>
                                </Nav.Link>,
                            ]
                        )
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;