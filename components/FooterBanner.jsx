import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';


const FooterBanner = ({footerBanner:{
  largeText1, midText, largeText2, desc, product, saleTime, image, link, buttonText, smallText
}}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{largeText1}</p>
          <h3>{largeText2}</h3>
          <h3>{midText}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <p>{midText}</p>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>

        </div>
        <img 
          src={urlFor(image)}
          className='hero-banner-image'
        />

      </div>

    </div>
  )
}

export default FooterBanner