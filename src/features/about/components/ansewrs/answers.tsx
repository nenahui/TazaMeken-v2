import styles from './style.module.scss'
const Answers = () => {
  return (
    <div className={styles.block}>
        <h1 className={styles.mainText}>Для чего нужны рейтиги?</h1>
        <div className={styles.columnWrapper}>
            <div className={styles.firstColumn}>
                <div className={styles.card}>
                    <h2 className={styles.title}>Мотивация к действиям</h2>
                    <p className={styles.text}>Рейтинги помогают вам видеть прогресс и вдохновляют на новые достижения. С каждой новой активностью вы получаете баллы, которые делают вас лидером экосообщества.</p>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.title}>Достижение статусов и наград</h2>
                    <p className={styles.text}>В зависимости от вашего рейтинга вы получаете доступ к эксклюзивным возможностям платформы — премиум-функциям, особым предложениям и наградам за достижения.</p>
                </div>
            </div>
            <div className={styles.secondColumn}>
                <div className={styles.card}>
                    <h2 className={styles.title}>Соревнование и сотрудничество</h2>
                    <p className={styles.text}>Вы можете соревноваться с другими пользователями за место в таблице лидеров или объединяться с друзьями и коллегами для достижения общих целей. Это делает экодеятельность не только полезной, но и увлекательной.</p>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.title}>Публичное признание</h2>
                    <p className={styles.text}>Высокий рейтинг — это способ показать другим пользователям, что вы активно заботитесь о природе. Вы становитесь примером для других, вдохновляя их на действия.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Answers
