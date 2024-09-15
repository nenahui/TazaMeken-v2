import { Layout } from '@/components/layout/layout';
import { About } from '@/features/about/about';
import { Home } from '@/features/home/home';
import { Merch } from '@/features/merch/merch';
import { MerchMain } from '@/features/merch/merchMain/merchMain';
import { MerchPay } from '@/features/merch/merchPay';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/eco-merch'} element={<MerchMain />} />
        <Route path={'/eco-merch/products'} element={<Merch />} />
        <Route path={'/eco-merch/payment'} element={<MerchPay />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    </Layout>
  );
};
