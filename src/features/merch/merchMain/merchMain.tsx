import { MainButton } from '@/features/merch/merchMain/components/mainButton/mainButton';
import { MainSubtitle } from '@/features/merch/merchMain/components/mainSubtitle/mainSubtitle';
import { MainTitle } from '@/features/merch/merchMain/components/mainTitle/mainTitle';
import React from 'react';
import BarsImage from '@/assets/merch-bars.svg';

export const MerchMain: React.FC = () => {
  return (
    <div className={'flex justify-between w-full'}>
      <div>
        <MainTitle />
        <MainSubtitle />
        <MainButton />
      </div>

      <img src={BarsImage} alt={'Bars'} className={'size-[700px]'} />
    </div>
  );
};
