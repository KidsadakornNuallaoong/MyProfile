import React from 'react'
const Header = React.lazy(() => import('../components/header'))

export default function Profile() {
  return (
    <> 
      <Header />
      <div className="container text-tertiary">
        <h1>Project</h1>
        <p>Welcome to my project!</p>
      </div>
    </>
  )
}