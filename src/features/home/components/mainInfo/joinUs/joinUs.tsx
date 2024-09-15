import { NavLink } from 'react-router-dom';

const JoinUs = () => {
  return (
    <div className='flex flex-col gap-10 w-[500px]'>
      <p className='text-4xl'>Видение экологичной, устойчивой и доступной жизни.</p>
      <NavLink to={''}>
        <button className='bg-primary text-white text-2xl px-10 py-8 font-bold rounded-[26px]'>Присоединяйться</button>
      </NavLink>
    </div>
  );
};

export default JoinUs;
