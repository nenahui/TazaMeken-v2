import GreenCard from '../greenCard/greenCard';

const Articles = () => {
  return (
    <div className='flex justify-center gap-6'>
      <div className='flex flex-col  gap-[67px] w-[410px]'>
        <p className='text-primary text-6xl font-bold'>Статьи</p>
        <span className='text-2xl'>
          Откройте мир экологии: актуальные статьи, мероприятия и интерактивные элементы на одной платформе
        </span>
      </div>
      <div className='flex gap-6'>
        <div className='flex flex-col gap-6'>
          <GreenCard showButton num={1} text='Проблема пластиковых отходов и как ее решить' />
          <GreenCard showButton num={3} text='Как правильно сортировать мусор: пошаговое руководство' />
        </div>
        <div className='flex flex-col gap-6 mt-16'>
          <GreenCard showButton num={2} text='Важность участия в экологических мероприятия' />
          <GreenCard showButton num={4} text='Эко-товары: почему стоит выбирать устойчивые продукты' />
        </div>
      </div>
    </div>
  );
};

export default Articles;
