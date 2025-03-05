import { Outlet } from 'react-router-dom';
import { TopBar } from './components/shared/topbar';

export function Layout() {
    return (
      <>
        <TopBar />
        <div className="ml-auto mr-auto max-w-4xl p-4">
            <Outlet />
        </div>
      </>
    );
  }