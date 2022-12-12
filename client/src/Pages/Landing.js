import React from 'react'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../Component'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
          <Logo></Logo>
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>
                    Trans<span>Code</span> Application
                </h1>
                <p> 
                    The primary goal of this project is to explore novice interaction with the AI code generator which means this application will be mainly used by who don’t have too much coding experience and this application can give them some computational thinking training as well as collecting data about 
                    how they will use this tools for further improvement of the existing teaching way.
                </p>
                <Link to = "/register" className='btn btn-hero'>
                    Register/Login
                </Link>

            </div>
            <img src = {main} alt= "trans main" className = 'img main-img'></img>

        </div>
    </Wrapper>
  )
}

export default Landing
