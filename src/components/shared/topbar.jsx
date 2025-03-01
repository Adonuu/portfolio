import { Link } from 'react-router-dom';
import './topbar.css';

export function TopBar() {
  return (
    <header>
      <nav>
        <div className="logoContainer">
          <Link to="/" className="logo">
            Adam Young
          </Link>
          <a href="https://github.com/Adonuu" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.21.66-.47v-1.68c-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.11-1.48-1.11-1.48-.91-.63.07-.62.07-.62 1 .07 1.53 1.02 1.53 1.02.91 1.53 2.39 1.09 2.97.83.09-.66.36-1.09.65-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.26.1-2.62 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 12 6.8c.85 0 1.72.11 2.53.33 1.9-1.29 2.74-1.02 2.74-1.02.54 1.36.2 2.37.1 2.62.63.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.58 4.95.37.32.69.94.69 1.9v2.81c0 .26.16.57.67.47A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/adam-young-0a21a6119/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.41c0-1.29-.02-2.94-1.79-2.94-1.79 0-2.06 1.4-2.06 2.85v5.5h-3v-10h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.6z"/>
            </svg>
          </a>
          <a href="mailto:adamyoung1414@gmail.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H2zm0 2h20v.01L12 13 2 6.01V6zm0 12v-9l10 7 10-7v9H2z"/>
            </svg>
          </a>
        </div>
        
        <div>
          <Link to="/resume">Resume</Link>
          <Link to="/work">Work</Link>
        </div>
      </nav>
    </header>
  );
}
