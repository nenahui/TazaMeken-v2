import { ArrowBackIc } from '@/assets/icons/arrow-back';
import { Button } from '@/components/ui/button';
import React from 'react';

interface Props {
  onClick?: () => void;
  mb?: string;
}

export const MerchBackButton: React.FC<Props> = ({ onClick, mb = 6 }) => {
  return (
    <Button onClick={onClick} variant={'ghost'} className={`max-w-max mb-${mb} -ml-6 pr-7 text-[16px]`}>
      <ArrowBackIc />
      <span>Назад</span>
    </Button>
  );
};
