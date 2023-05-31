import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='Navmain'>
        <div className='Navleft'>
          <img src='https://www.liblogo.com/img-logo/ho7011hd4e-hootsuite-logo-hootsuite-logo-the-post.png' alt=''></img>
        </div>
        <div className='Navmid'>
            <a href="h">Platform</a>
            <a href="h">Plans</a>
            <a href="h">Enterprice</a>
            <a href="h">Resource</a>
            <a href="h">Education</a>

        </div>
        <div className='Navright'>
            <a href="h" className='na'>Contact Us!</a>
            <a href="h" className='na'>Log In</a>
            <button>Signup</button>
        </div>

    </div>
  )
}

export default Nav