import Link from 'next/link'
import React from 'react'


// name are in captial letters  will be dynamic txt 
//which will change according to the product

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <img src='' alt='presents' className='hero-banner-image'/>

        <div>
          <Link href="/product/ID">
            <button type='button'>BUTTON TEXT</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner