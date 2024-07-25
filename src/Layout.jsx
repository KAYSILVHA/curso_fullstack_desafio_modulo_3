import { Outlet } from 'react-router-dom';
import Sidebar from './Components/Pages/Sidebar/Sidebar';

import "./assets/style/style.scss"

function Layout() {
  return (
    <div className='layout'>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
