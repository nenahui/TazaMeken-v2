import style from './style.module.scss'
const Rating = () => {
  return (
    <div className={style.ratingWrapper}>
        <div className={style.wrapper}>
            <h1 className={style.rating}>2.5k</h1>
            <p className={style.text}>деревьев посажено</p>
        </div>
        <div className={style.wrapper}>
            <h1 className={style.rating}>150т</h1>
            <p className={style.text}>отходов собрано</p>
        </div>
        <div className={style.wrapper}>
            <h1 className={style.rating}>500+</h1>
            <p className={style.text}>полезных статей</p>
        </div>
        <div className={style.wrapper}>
            <h1 className={style.rating}>120+</h1>
            <p className={style.text}>видеоуроков</p>
        </div>
    </div>
  )
}

export default Rating
