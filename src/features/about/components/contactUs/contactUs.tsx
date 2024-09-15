import { Link } from "react-router-dom"
import ArrowUpRight from '@/assets/arrow-up-right.svg'
import styles from './styles.module.scss'


const ContactUs = () => {
  return (
    <Link to={''} className={styles.Btn}>
        <span className={styles.BtnText}>Связаться с нами</span>
        <img src={ArrowUpRight} alt="contact-us" />
    </Link>
  )
}

export default ContactUs
