import { useEffect } from "react";
import { Navbar, Nav, Image } from "react-bootstrap"
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { deleteToken, deleteUser, login, logout } from "../redux/actions";

const Navigation = () => {

    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector(s=>s);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    
    async function logoutScenario() {

        removeCookie('token');
        dispatch(deleteUser());
        dispatch(deleteToken());
        dispatch(logout());
    }

    return (
        <Navbar expand="lg">
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
                            [
                                <span className="nav-text p-2">Welcome back {user.username}</span>,
                                <Nav.Link className="nav-text">
                                    <Link to="/" onClick={() => logoutScenario()}>
                                        Logout
                                    </Link>
                                 </Nav.Link>,
                            ]
                            :
                            [
                                <Nav.Link className="nav-text">
                                    <Link to="/Signup">
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