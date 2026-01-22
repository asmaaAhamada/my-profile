import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Layout from './components/layout/layout'

import WelcomPage from './components/LinkPages/Home/welcomPage'

import ConectPage from './components/ConectPage'
import ProjectDetailsPage from './components/ProjectDetailsPage'
import RedoAt from './components/LinkPages/Home/redo'
import CardPage from './components/LinkPages/Home/fetures'


export default function App({toggleMode, mode}){
  return (
    <>
     
       <Routes>

    {/* <Route path="/login" element={<Login />} />
    <Route path="/google/callback" element={<Login_Google />} /> */}

    {/* <Route path="/sighn" element={<SignUp />} /> */}
{/* //////////////token//////////////// */}
      {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/" element={<Layout toggleMode={toggleMode} mode={mode}/>}>
<Route index element={<WelcomPage />} />
    <Route path="/Public" element={<WelcomPage />} />

    <Route path="/Skills" element={<RedoAt />} />
<Route path="/projects/:id" element={<ProjectDetailsPage />} />
      <Route path="/projects" element={<CardPage />} />

        <Route path="/conect" element={<ConectPage />} />


</Route>
        {/* </Route> */}
     
</Routes> 
    </>
  )
}