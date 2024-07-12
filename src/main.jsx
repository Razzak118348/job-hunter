import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';
import Statistics from './Components/Statistics/Statistics';
import Error from './Components/ErrorPage/Error';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
{
  path:'/',
  element:<Home></Home>
},
{
  path:'/applied',
  element:<AppliedJobs></AppliedJobs>,
  loader: ()=>fetch('../public/job.json')
},
{
  path:'/blogs',
  element:<Blogs></Blogs>
},
{
  path:'/statistics',
  element:<Statistics></Statistics>
},
{
  path:'/job/:id',
  element:<JobDetails></JobDetails>,
  loader:()=>fetch('../public/job.json'),
}


    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
