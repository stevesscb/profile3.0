import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'src/main.scss';

// Pages
import Root from 'src/layout/Root';
import Home from 'src/layout/pages/home/Home';
import About from 'src/layout/pages/about/About';
import Projects from 'src/layout/pages/projects/Projects';
import Contact from 'src/layout/pages/contact/Contact';
import ErrorPage from 'src/layout/pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
