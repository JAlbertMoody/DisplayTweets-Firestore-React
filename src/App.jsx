import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from './components/Layout';
import { Home } from "./pages/Home";
import { Liked } from "./pages/Liked"
import { Retweets } from "./pages/Retweets";
import { Replies } from "./pages/Replies";

// Basic React Router 6 setup

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path="liked" element={<Liked />}/>
    <Route path="retweets" element={<Retweets />}/>
    <Route path="replies" element={<Replies />}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
