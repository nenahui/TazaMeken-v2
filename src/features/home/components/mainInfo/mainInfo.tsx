import JoinUs from './joinUs/joinUs';
import MainSlogan from './mainSlogan/mainSlogan';
import Sponsers from './sponsers/sponsers';
import styles from './mainInfo.module.scss'

const MainInfo = () => {
  return (
    <div className={styles.mainDiv}>
      <div className='flex flex-col gap-[30%]'>
        <Sponsers />
        <JoinUs />
      </div>
      <MainSlogan/>
    </div>
  );
};

export default MainInfo;
