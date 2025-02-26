import { Outlet } from 'react-router-dom';
import { TopBar } from './components/shared/topbar';

export function Layout() {
    return (
      <>
        <TopBar />
        <Outlet />
      </>
    );
  }