import { SOCIAL_LINKS } from '../../constants/index'
import { Container, NavLink, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {


    return (

        <header>
            <div  className='content'>
                <p>Hi, I'm</p>
                <h1 className='nameTitle'>Hugo Álvarez</h1>
                <h2 className='subtitle'>Web Developer</h2>
            
                <ul className='socialList'>
                    {SOCIAL_LINKS.map((link, idx) =>
                        <li key={idx}>
                            <NavLink href={link.href}>
                                <a href={link.href} target="_blank">
                                    <figure>
                                        <img src={link.icon} alt={link.name}></img>
                                    </figure>
                                </a>
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </header>

    )
}
export default Header
