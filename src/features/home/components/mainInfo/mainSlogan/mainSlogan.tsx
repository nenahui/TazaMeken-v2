import maskot from '/src/assets/mainMaskot.svg';

const MainSlogan = () => {
  return (
    <div className='max-w-[780px] gap-6 flex-col flex '>
        <h1 className='text-[80px] font-bold'>Мы создаём чистое будущее</h1>
        <img src={maskot} alt="bars" />
    </div>
  )
}

export default MainSlogan