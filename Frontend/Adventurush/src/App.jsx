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

import Bike_Expedition from './Pages/Bike_Expedition';
import Skydiving from './Pages/Skydiving';
import Trekking from './Pages/Trekking';
import River_Rafting from './Pages/River_Rafting';
import Bungee_Jumping from './Pages/Bungee_Jumping';
import Scuba_Diving from './Pages/Scuba_Diving';
import Login from './Login';
import Signup from './Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="More" element={<More />} />
      <Route path="Experience" element={<Experience />} />
      <Route path="Offers" element={<Offers/>} />
      <Route path="Destination" element={<Destination/>} />
      <Route path="Bike_Expedition" element={<Bike_Expedition/>} />
      <Route path="Skydiving" element={<Skydiving/>} />
      <Route path="Trekking" element={<Trekking />} />
      <Route path="River_Rafting" element={<River_Rafting />} />
      <Route path="Bungee_Jump" element={<Bungee_Jumping />} />
      <Route path="Scuba_Diving" element={<Scuba_Diving />} />
      <Route path="Login" element={<Login/>} />
      <Route path="Signup" element={<Signup/>} />
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
