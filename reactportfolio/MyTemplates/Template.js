//Creating a template that I can use for my components to stay consistent with the format.
import React from 'react'
import "../components/.css";

const Template = () => {
  return (
  <div className='page'>
    <div className='header'>
        <h2 className='header-title'></h2>
    </div>
    <div className='content'>
        <p className='content-text'></p>
    </div>
    <div className='button-contaier'>
        {/* this is where a button would go, if the page features a button. */}
    </div>
  </div>









  )
}

export default Template