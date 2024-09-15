import { Input } from '@/components/ui/input';
import { NavLink } from 'react-router-dom';
import img from '@/assets/questionnairesImg.svg';

const Questionnaires = () => {
  return (
    <div className='bg-primary flex justify-around px-[96px] py-[79px] rounded-[75px]'>
      <div className='w-[680px] flex flex-col gap-8'>
        <p className='text-5xl text-white mb-6'>
          TazaMeken помогает собрать всех сотрудников, задачи и инструменты в одном месте
        </p>
        <p className='text-2xl'>Проходите опросники получайте балы и поднимайтесь по рейтингу .</p>
        <div className='flex flex-col gap-3 max-w-[330px]'>
          <Input type='email' placeholder='Email' />
          <NavLink to=''>
            <button className='text-[14px] bg-[#679778] px-2 py-4 text-white rounded-[18px]'>
              Зарегистрируйтесь — это бесплатно!
            </button>
          </NavLink>
        </div>
      </div>
      <img src={img} alt='error' />
    </div>
  );
};

export default Questionnaires;
