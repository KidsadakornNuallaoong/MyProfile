import React from 'react'
const Home = React.lazy(() => import('./pages/Home'))
const Profile = React.lazy(() => import('./pages/Profile'))
const Project = React.lazy(() => import('./pages/Project'))
const Blog = React.lazy(() => import('./pages/Blog'))
const Research = React.lazy(() => import('./pages/Research'))
const NoPage = React.lazy(() => import('./pages/NoPage'))

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
          <Route path="/Blog" element={<Blog />} />
          <Route path="/research" element={<Research />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
