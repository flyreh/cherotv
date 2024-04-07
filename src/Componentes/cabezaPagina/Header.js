import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

    function login() {
        navigate("/auth/login");
    }
    function register() {
        navigate("/auth/register");
    }


    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container >
                <Navbar.Brand href="/" style={{ "color": '#B197FC' }}>
                    <FontAwesomeIcon icon={faVideoSlash} style={{ color: "#B197FC", }} /> Chero/TV
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </Nav>
                    <Button variant="outline-info" onClick={login} className="me-2">Login</Button>
                    <Button variant="outline-info" onClick={register}>Register
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header