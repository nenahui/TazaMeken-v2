import { Products } from '@/features/merch/products';
import React from 'react';

export const Merch: React.FC = () => {
  return (
    <div className={'flex flex-col'}>
      <Products />
    </div>
  );
};
