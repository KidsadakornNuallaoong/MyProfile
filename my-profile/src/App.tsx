import React from 'react'
const Home = React.lazy(() => import('./pages/Home'))
const Profile = React.lazy(() => import('./pages/Profile'))
const Project = React.lazy(() => import('./pages/Project'))
const Service = React.lazy(() => import('./pages/Service'))
const Research = React.lazy(() => import('./pages/Research'))

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project" element={<Project />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
