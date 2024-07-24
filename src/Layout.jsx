import { Outlet } from 'react-router-dom';
import Sidebar from './Components/Pages/Sidebar/Sidebar';

import "./assets/style/style.scss"

function Layout() {
  return (
    <>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
