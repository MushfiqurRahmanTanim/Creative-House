import { FC } from 'react';
import Header from './Header';



const Layout:FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className=''>
        {children}
      </main>
     
    </>
  );
};

export default Layout;