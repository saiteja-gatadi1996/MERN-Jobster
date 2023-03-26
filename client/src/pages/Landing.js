import React from 'react'
import main from '../assets/images/main.svg'
import styled from 'styled-components'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
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
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
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
  .page {
    min-height: calc(100vh- (var(--nav-height)));
    display: grid;
    align-items: center;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`

export default Landing
