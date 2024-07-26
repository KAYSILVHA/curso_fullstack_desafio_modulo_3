import { Outlet } from 'react-router-dom';
import Sidebar from './Components/Pages/Sidebar/Sidebar';

import "./assets/style/style.scss"
import Header from './Components/Pages/Header/Header';

function Layout() {
  return (
    <div className='layout'>
      <Sidebar />
      <Header/>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
