import React, { Children } from "react";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Home from './Components/Home/Home';

const App = () => {
  let routes = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "About",
          element: <About />,
        },
        {
          path: "Home",
          element: <Home />,
        },
        {
          path: "Portfolio",
          element: <Portfolio />,
        },
        {
          path: "Contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
