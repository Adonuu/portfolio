import { Outlet } from 'react-router-dom';
import { TopBar } from './components/shared/topbar';
import { Footer } from './components/shared/footer';

import "./layout.css";

export function Layout() {
    return (
      <>
        <TopBar />
        <div className="main-content">
            <Outlet />
        </div>
        <Footer />
      </>
    );
  }