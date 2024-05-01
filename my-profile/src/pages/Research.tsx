import React from 'react'
const Header = React.lazy(() => import('../components/header'))

export default function Profile() {
  return (
    <> 
      <Header />
      <div className="container text-tertiary">
        <h1>Research</h1>
        <p>Welcome to my research!</p>
      </div>
    </>
  )
}