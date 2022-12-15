import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar.js'
import Logo from './WhiteLogo'
import NavLinks from './NavLinks.js'
import { useAppContext } from '../Context/appContext.js'

const BigSidebar = () => {
  const {showSidebar} = useAppContext()
  return (
    <Wrapper>
      <div className={showSidebar? "sidebar-container" : 'sidebar-container show-sidebar'}>
        <div className='content'>
          <header>
            <Logo/>
          </header>
          <NavLinks/>
        </div>

      </div>
    </Wrapper>
  )
}

export default BigSidebar
