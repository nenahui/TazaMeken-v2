import { NavLink } from 'react-router-dom';
import styles from './discriptionEvents.module.scss'

const DiscriptionEvents = () => {
  return (
    <div className={styles.mainDiv}>
      <p className='text-4xl flex flex-col'>
        <span className='font-bold'>Будь в курсе экособытий!</span>
        На нашей странице мероприятий ты можешь найти информацию обо всех предстоящих экологических событиях.
      </p>
      <NavLink to=''>
        <button className='bg-primary text-white px-16 rounded-[36px] py-6 text-2xl'>Перейти</button>
      </NavLink>
    </div>
  );
};

export default DiscriptionEvents;
