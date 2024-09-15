import styles from './style.module.scss'
import ripple from '@/assets/icons/ripple_logo.svg.svg'
import spotify from '@/assets/icons/spotify_logo.svg.svg'
import dropbox from '@/assets/icons/dropbox_logo.svg.svg'
import mister_aladin from '@/assets/icons/mister_aladin_logo.svg.svg'
import airbnb from '@/assets/icons/airbnb_logo.svg.svg'
import walmart from '@/assets/icons/walmart_logo.svg.svg'

const Companies = () => {
  return (
    <div className={styles.block}>
        <img src={ripple} alt="ripple" />
        <img src={spotify} alt="spotify" />
        <img src={dropbox} alt="dropbox" />
        <img className={styles.icon} src={mister_aladin} alt="mister_aladin" />
        <img src={airbnb} alt="airbnb" />
        <img src={walmart} alt="walmart" />
    </div>
  )
}

export default Companies
