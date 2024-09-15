import style from './style.module.scss';


const CardList = () => {
  return (
    <div className={style.block}>
        <h1 className={style.MainText}>Что мы предлагаем</h1>
        <span className={style.subtext}>Мы создали платформу, которая помогает:</span>
        <div className={style.containerWrapper}>
            <div className={style.container}>
                <span>01</span>
                <p>Участвовать в экологических инициативах — через мероприятия, акции и проекты.</p>
            </div>
            <div className={style.container}>
                <span>02</span>
                <p>Совершать экологичные покупки — через наш раздел ECO Merch.</p>
            </div>
            <div className={style.container}>
                <span>03</span>
                <p>Совершать экологичные покупки — через наш раздел ECO Merch.</p>
            </div>
        </div>
    </div>
  )
}

export default CardList
