import { LINKS } from '../../constants/index'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {

    console.log(LINKS)

    return (
        <>
            <Navbar className="container" >
                <Container className='wrapper'>
                    <Nav className='menu'>
                        <NavLink className="menuItem" to={LINKS[0]?.href} >Home</NavLink>
                        <NavLink className="menuItem" to={LINKS[1]?.href} >About Me</NavLink>
                        <NavLink className="menuItem" to={LINKS[2]?.href} >Projects</NavLink>
                        <NavLink className="menuItem" to={LINKS[3]?.href} >Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Navigation

