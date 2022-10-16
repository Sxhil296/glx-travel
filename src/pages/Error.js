import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
        <h1>Error 404</h1>
        <p>page not found</p>
        <p>something went wrong</p>
        <Link to='/' className='btn'>Back to home</Link>
    </div>
  )
}

export default Error