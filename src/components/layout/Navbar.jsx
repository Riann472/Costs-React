import { Link } from 'react-router-dom'
import logo from '../../img/costs_logo.png'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to='/'><img src={logo} alt="" /></Link>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projetos</Link></li>
                <li> <Link to='/contact'>Contact</Link></li>
                <li><Link to='/company'>Empresa</Link></li>
            </ul>
        </nav>
    )
}