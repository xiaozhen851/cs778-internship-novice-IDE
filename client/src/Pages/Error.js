import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage'
import error from "../assets/images/not-found.svg"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const Error = () => {
    return (
        <Wrapper className='full-page'>
          <div>
              <img src={error} alt='not found' />
              <h3>Opps Page Not Found</h3>
              <p>Please go back to the home page</p>
              <Link to = "/">Back to Homepage</Link>
          </div>
        </Wrapper>
    )
  }
  
  export default Error