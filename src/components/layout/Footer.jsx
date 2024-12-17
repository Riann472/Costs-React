import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
export default function Navbar() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p><span>Costs</span> &copy; 2024</p>
        </footer>
    )
}