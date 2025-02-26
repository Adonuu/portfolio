import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

// layout
import { Layout } from './layout';

// Pages
import { Index } from './pages/index';
import { Resume } from './pages/resume';
import { Work } from './pages/work';


// Create the router with a layout wrapper
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Index /> },
      { path: "resume", element: <Resume /> },
      { path: "work", element: <Work /> }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
