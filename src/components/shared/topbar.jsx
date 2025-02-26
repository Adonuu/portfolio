import { Link } from 'react-router-dom';
import './topbar.css';

export function TopBar() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">Adam Young</Link>
        <div>
          <Link to="/resume">Resume</Link>
          <Link to="/work">Work</Link>
        </div>
      </nav>
    </header>
  );
}
