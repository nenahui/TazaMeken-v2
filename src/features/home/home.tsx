import React from 'react';
import MainInfo from './components/mainInfo/mainInfo';
import QrOnTrashBox from './components/qrOnTrashBox/qrOnTrashBox';
import Statistica from './components/statistica/statistica';
import Articles from './components/articles/articles';
import Events from './components/events/events';
import Questionnaires from './components/questionnaires/questionnaires';
import VideoLessons from './components/videoLessons/videoLessons';

export const Home: React.FC = () => {
  return (
    <div className='flex flex-col gap-[121px]'>
      <MainInfo />
      <QrOnTrashBox />
      <Statistica />
      <Articles />
      <Events />
      <Questionnaires />
      <VideoLessons />
    </div>
  );
};
