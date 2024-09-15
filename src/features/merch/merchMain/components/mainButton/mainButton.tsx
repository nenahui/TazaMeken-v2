import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';

export const MainButton: React.FC = () => {
  return (
    <Link to={'/eco-merch/products'}>
      <Button className={'w-full h-16 text-xl'}>Перейти</Button>
    </Link>
  );
};
