import { Link } from 'react-router-dom';
import { BurgerMenu } from './burgerMenu';

export function TopBar() {
  return (
    <header>
      <nav className="flex w-full gap-2 justify-between items-center p-4 lg:w-3/5 mx-auto">
        <div className="flex gap-3 items-center">
          <Link to="/" className="relative font-bold text-2xl hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left hover:no-underline">
            Adam Young
          </Link>
          
          <div className="flex gap-3">
  <a href="https://github.com/Adonuu" target="_blank" rel="noopener noreferrer" className="relative group">
    <svg
      className="w-8 h-8 text-white group-hover:text-blue-500 transition-all duration-300 transform group-hover:scale-125"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.21.66-.47v-1.68c-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.11-1.48-1.11-1.48-.91-.63.07-.62.07-.62 1 .07 1.53 1.02 1.53 1.02.91 1.53 2.39 1.09 2.97.83.09-.66.36-1.09.65-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.26.1-2.62 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 12 6.8c.85 0 1.72.11 2.53.33 1.9-1.29 2.74-1.02 2.74-1.02.54 1.36.2 2.37.1 2.62.63.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.58 4.95.37.32.69.94.69 1.9v2.81c0 .26.16.57.67.47A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
    </svg>
  </a>

  <a href="https://www.linkedin.com/in/adam-young-0a21a6119/" target="_blank" rel="noopener noreferrer" className="relative group">
    <svg
      className="w-8 h-8 text-white group-hover:text-blue-500 transition-all duration-300 transform group-hover:scale-125"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.41c0-1.29-.02-2.94-1.79-2.94-1.79 0-2.06 1.4-2.06 2.85v5.5h-3v-10h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.6z"/>
    </svg>
  </a>

  <a href="mailto:adamyoung1414@gmail.com" target="_blank" rel="noopener noreferrer" className="relative group">
    <svg
      className="w-8 h-8 text-white group-hover:text-blue-500 transition-all duration-300 transform group-hover:scale-125"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 75.294 75.294"
      fill="currentColor"
    >
      <path d="M66.1 12.1h-56.9C4.1 12.1 0 16.2 0 21.3v32.7c0 5.1 4.1 9.2 9.2 9.2h56.9c5.1 0 9.2-4.1 9.2-9.2V21.3c0-5.1-4.1-9.2-9.2-9.2ZM61.6 18.1 37.6 33.5 13.7 18.1h47.9ZM66.1 57.2h-56.9c-1.7 0-3.1-1.4-3.1-3.2V21.5l29.8 19.2c.3.2.6.3.9.4.3.1.5.1.8.1s.5 0 .8-.1c.3-.1.6-.2.9-.4l29.8-19.2v32.6c0 1.8-1.4 3.2-3.2 3.2Z"/>
    </svg>
  </a>
</div>

        </div>
        <BurgerMenu className="flex ml-4 justify-center items-center lg:hidden" />
        <div className="hidden gap-2 md:flex  lg:ml-auto mt-2 lg:mt-0">
          <Link className="relative text-lg hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left hover:no-underline" to="/resume">Resume</Link>
          <Link className="relative text-lg hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left hover:no-underline" to="/work">Work</Link>
        </div>
      </nav>
      <div className="px-4">
        <div className="h-0.25 w-full bg-white lg:w-3/5 mx-auto"></div>
      </div>
      
    </header>
  );
}
