import React from 'react'
import Home from './Home'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Offers from './Pages/Offers';
import Experience from './Pages/Experience';
import More from './Pages/More';
import Destination from './Pages/Destination';
import Layout from './Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="More" element={<More />} />
      <Route path="Experience" element={<Experience />} />
      <Route path="Offers" element={<Offers/>} />
      <Route path="Destination" element={<Destination/>} />
    </Route>
  )
);
export default function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}
