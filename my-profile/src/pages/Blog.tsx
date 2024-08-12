import React from 'react'
const Navbar = React.lazy(() => import('../components/Navbar'))

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="display flex items-center justify-center w-screen bg-primary">
        <div className="container text-tertiary flex flex-col items-center justify-center">
          <h1>Blog</h1>
          <p>Welcome to my content!</p>
        </div>
      </div>
    </>
  )
}