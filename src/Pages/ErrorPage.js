import React from 'react'
import '../Css/PageCss/PageError.css'

export default function ErrorPage() {
  return (
    <div className='errorPageContainer'>
      <div className='error'>
        <div>404</div>
      </div>
      <div className='errorFound'>Not Founddddd</div>
      <div className='errorText'>
        The resource requested could not be found on this server!
      </div>
    </div>
  )
}
