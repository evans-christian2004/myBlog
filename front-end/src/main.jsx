import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Routes/Home.jsx';
import PostList from './Routes/PostList.jsx';
import Write from './Routes/Write.jsx';
import SinglePost from './Routes/SinglePost.jsx';
import Register from './Routes/Register.jsx';
import Login from './Routes/Login.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <PostList/>,
      },
      {
        path: "/:slug",
        element: <SinglePost/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/write",
        element: <Write/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router}/>
    </ClerkProvider>
  </StrictMode>
);
