import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navbar1 = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <NavLink className='navbar-brand' to='/'>React-Bootstrap</NavLink>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <NavLink data-rr-ui-event-key='/' className='nav-link' to='/home'>
                        Home
                    </NavLink>
                    <NavLink data-rr-ui-event-key='/link' className='nav-link' to='/link'>
                        Link
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbar1
