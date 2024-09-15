import qrTrashBox from '@/assets/qrTrashBox.svg';
import GreenCard from '../../greenCard/greenCard';
import styles from './featuresQr.module.scss';

const FeaturesQr = () => {
  return (
    <div className='flex justify-center gap-[402px] p-'>
      <div className='flex flex-col gap-5 mt-[137px]'>
        <GreenCard num={1} text='Сканируйте QR-код на мусорном баке через приложение.' />
        <GreenCard num={2} text='Сделайте фото состояния контейнера.' />
      </div>
      <img className={styles.img} src={qrTrashBox} alt='qrTrashBox' />
      <div className='flex flex-col gap-5 mt-[290px]'>
        <GreenCard num={3} text='Отправьте фотоотчет через приложение.' />
        <GreenCard num={4} text='Ожидайте, пока служба Tazalyk получит уведомление и вывозит мусор своевременно.' />
      </div>
    </div>
  );
};

export default FeaturesQr;
