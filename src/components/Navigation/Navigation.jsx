import { LINKS } from '../../constants/index'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    console.log(LINKS)

    return (
        <>
            <Navbar className="Navbar" >
                <Container className="Navbar2">
                    <Nav>
                        <NavLink to={LINKS[0]?.href} >Home</NavLink>
                        <NavLink to={LINKS[1]?.href} >About Me</NavLink>
                        <NavLink to={LINKS[2]?.href} >Projects</NavLink>
                        <NavLink to={LINKS[3]?.href} >Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Navigation

