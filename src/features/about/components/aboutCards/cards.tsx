import styles from './style.module.scss'
const Cards = () => {
  return (
    <div className={styles.block}>
        <div className={styles.card}>
            <div className={styles.header}></div>
            <h2 className={styles.title}>Управление проектами</h2>
            <p className={styles.text}>Поддерживайте порядок среди заданий, отслеживайте сроки и координируйте командную работу с помощью Trello.</p>
        </div>
        <div className={styles.card}>
            <div className={styles.header}></div>
            <h2 className={styles.title}>Собрания</h2>
            <p className={styles.text}>Сделайте командные собрания более продуктивными, вдохновляющими и даже увлекательными.</p>
        </div>
        <div className={styles.card}>
            <div className={styles.header}></div>
            <h2 className={styles.title}>Адаптация сотрудников</h2>
            <p className={styles.text}>Благодаря визуальному представлению задач, ресурсов и прогресса в Trello легко ознакомиться с новой компанией или проектом.</p>
        </div>
    </div>
  )
}

export default Cards
