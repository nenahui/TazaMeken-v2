import { Layout } from '@/components/layout/layout';
import { About } from '@/features/about/about';
import { Home } from '@/features/home/home';
import { Merch } from '@/features/merch/merch';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/ec-merch'} element={<Merch />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    </Layout>
  );
};
