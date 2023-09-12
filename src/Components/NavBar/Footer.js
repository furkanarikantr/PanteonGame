import React from 'react'

import '../../Css/ComponentCss/NavBarCss/Footer.css'

export default function Footer() {
  return (
    <div className='footerContainer'>
      <div className='socialMediaSide'>
        <a href='https://www.facebook.com/wearePanteon' target='_blank'>
          <i style={{ color: 'white' }} class='bi bi-facebook fs-1'></i>
        </a>
        <a href='https://twitter.com/wearepanteon' target='_blank'>
          <i style={{ color: 'white' }} class='bi bi-twitter fs-1'></i>
        </a>
        <a href='https://www.instagram.com/wearepanteon/' target='_blank'>
          <i style={{ color: 'white' }} class='bi bi-instagram fs-1'></i>
        </a>
        <a href='https://www.youtube.com/user/GamePantheon' target='_blank'>
          <i style={{ color: 'white' }} class='bi bi-youtube fs-1'></i>
        </a>
        <a href='https://www.linkedin.com/company/panteon/' target='_blank'>
          <i style={{ color: 'white' }} class='bi bi-linkedin fs-1'></i>
        </a>
      </div>
      <div className='bottomSide'>
        <a
          style={{ textDecoration: 'none' }}
          href='https://www.panteon.games/en/'
          target='_blank'
        >
          <span style={{ color: 'white' }} class='fs-5'>
            Copyright &copy; 2023 Panteon Games. This Demo Project was Developed
            <a
              style={{
                textDecoration: 'none',
                color: 'white',
                margin: '0 0.4rem 0 0.4rem',
              }}
              href='https://www.linkedin.com/in/arikanfurkan/'
              target='_blank'
            >
              Furkan Arıkan
            </a>
            for Panteon Games.
          </span>
        </a>
      </div>
    </div>
  )
}
