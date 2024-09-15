import { NavLink } from 'react-router-dom';
import img from '@/assets/videoLessonsImg.svg';
const VideoLessons = () => {
  return (
    <div className='text-center flex flex-col justify-center'>
      <p className='text-6xl w-[1100px] text-primary mx-auto mb-12'>Просмотри видеоуроки и получи балы!</p>
      <NavLink to=''>
        <button className='px-28 py-6 text-white bg-primary rounded-[26px]'>Перейти</button>
      </NavLink>
      <img src={img} alt='' />
    </div>
  );
};

export default VideoLessons;
