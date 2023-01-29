import {NavLink, useNavigate} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import {Navbar, Container, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout, stateReset, userProfile} from "../../redux/user/login";

const Navbar1 = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [token, setToken] = useState(false);

    const {localStorageState, success, successReg, user} = useSelector(state => state.login)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(true);
            dispatch(userProfile())
        } else {
            setToken(false)
        }
    }, [localStorageState])

    useEffect(() => {
        if (success) {
            dispatch(userProfile())
            navigate("/")
            dispatch(stateReset())
        }
    }, [success])

    useEffect(() => {
        if (successReg) {
            navigate("/login")
            dispatch(stateReset())
        }
    }, [successReg])

    console.log(user)

    return (
        <Navbar bg='light' expand='lg'>
            <Container fluid>
                <NavLink className='navbar-brand' to='/'>Mening yerim</NavLink>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        {
                            !token ?
                                <Button onClick={() => navigate("/login")}>
                                    Login
                                </Button> :
                                <Button onClick={() => dispatch(logout())}>{user?.user}</Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbar1
