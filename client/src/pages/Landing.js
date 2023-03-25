import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import styled from 'styled-components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
      </nav>
      <div className='container page'>
        {/* information block*/}
        <div className='info'>
          <h1>
            job <span>tracking </span> app
          </h1>
          <p>
            I'm baby blackbird spyplane meditation schlitz tilde. Artisan big
            mood four loko tattooed. Flannel bushwick same 3 wolf moon organic.
            Stumptown artisan gentrify, trust fund snackwave hoodie jean shorts
            intelligentsia brunch af cliche fam everyday carry microdosing.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        {/* image block */}
        <img src={main} alt='main logo' className='img main-img' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    height: var(--nav-height);
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
`

export default Landing
