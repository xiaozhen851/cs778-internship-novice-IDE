import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar.js'
import { FaTimes } from 'react-icons/fa'
import Logo from './WhiteLogo'
import { useAppContext } from '../Context/appContext.js'
import NavLinks from './NavLinks.js'


const SmallSidebar = () => {
    const {showSidebar,toggleSidebar} = useAppContext();
  return (
    <Wrapper>
        <div className={showSidebar?'sidebar-container show-sidebar':'sidebar-container'}>
            <div className='content'>
                <button className='close-btn' onClick={()=>{
                    toggleSidebar();
                    }}>
                    <FaTimes/>
                </button>
                <header>
                    <Logo/>
                </header>
                <NavLinks toggleSidebar={toggleSidebar}></NavLinks>
            </div>
        </div>
    </Wrapper>
  )
}

export default SmallSidebar
