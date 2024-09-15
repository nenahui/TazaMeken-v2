import { Header } from '@/components/header/header';
import React, { type PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div className={'container mx-auto mt-5'}>
      {!pathname.includes('eco-merch/') && <Header />}
      {children}
    </div>
  );
};
