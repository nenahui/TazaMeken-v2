import styles from './style.module.scss'
import Puzzle from '@/assets/Integrations_Puzzle.svg.svg'
import Gears from '@/assets/Gears.svg.svg'
import Search from '@/assets/Search_Value.svg.svg'
import { Link } from 'react-router-dom'


function Together() {
  return (
    <div className={styles.block}>
      <h1 className={styles.mainText}>Делайте больше вместе с TazaMeken</h1>
      <div className={styles.container}>
        <div>
            <img src={Puzzle} alt="" />
            <span className={styles.text}>Интеграции</span>
            <p className={styles.description}>Вы можете подключить к рабочему процессу Trello приложения, уже пользуется команда, или добавить.</p>
            <div className={styles.btnWrapper}>
            <Link to={''} className={styles.btn}>Просмотрите интеграции</Link>
            </div>
        </div>
        <div>
            <img src={Gears} alt="" />
            <span className={styles.text}>Автоматизация Butler</span>
            <p className={styles.description}>Во все доски Trello встроена автоматизация, не требующая программирования. Сосредоточьтесь на самом важном, роботы.</p>
            <div className={styles.btnWrapper}>
            <Link to={''} className={styles.btn}>Познакомьтесь с автоматизацией</Link>
            </div>
        </div>
        <div>
            <img src={Search} alt="" />
            <span className={styles.text}>Trello Enterprise</span>
            <p className={styles.description}>Популярный среди команд инструмент повышения производительности плюс для безопасного масштабирования.</p>
            <div className={styles.btnWrapper}>
            <Link to={''} className={styles.btn}>Ознакомьтесь с Trello Enterprise</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Together
