import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';

import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
