import { Outlet } from 'react-router-dom';
import { TopBar } from './components/shared/topbar';

import "./layout.css";

export function Layout() {
    return (
      <>
        <TopBar />
        <div className="main-content">
            <Outlet />
        </div>
      </>
    );
  }