import SnowLeopard from '@/assets/snow-leopard.svg'
import ornament from '@/assets/Ornament-70.svg'
import styles from './style.module.scss'
import checkCircle from '@/assets/icons/check-circle.svg'
const OurSolution = () => {
  return (
    <div className={styles.block}>
        <div className={styles.secondBlock}>
            <img className={styles.ornament} src={ornament} alt="ornament" />
            <h1 className={styles.MainText}>Ценности платформы</h1>
            <div className={styles.SecondBlockContent}>
                <img src={checkCircle} alt="check-circle" />
                <div className={styles.contentBlock}>
                    <span className={styles.text}>Экологическое сознание</span>
                    <p className={styles.description}>Мы продвигаем идеи устойчивого развития и ответственного потребления.</p>
                </div>
            </div>
            <div className={styles.SecondBlockContent}>
                <img src={checkCircle} alt="check-circle" />
                <div className={styles.contentBlock}>
                    <span className={styles.text}>Прозрачность</span>
                    <p className={styles.description}>Все наши действия и решения открыты для пользователей. Мы стремимся быть максимально честными и доступными в коммуникации.</p>
                </div>
            </div>
            <div className={styles.SecondBlockContent}>
                <img src={checkCircle} alt="check-circle" />
                <div className={styles.contentBlock}>
                    <span className={styles.text}>Объединение усилий</span>
                    <p className={styles.description}>Мы верим, что совместные действия могут привести к реальным изменениям. Через платформу мы помогаем людям и организациям объединяться ради общего экологического будущего.</p>
                </div>
            </div>
        </div>
        <img className={styles.SnowLeopard} src={SnowLeopard} alt="" />
    </div>
  )
}

export default OurSolution
