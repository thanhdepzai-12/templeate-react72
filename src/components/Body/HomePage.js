import React from 'react'
import videoHomePage from "../../assets/videoHomePage.mp4"
const HomePage = (props) => {
  return (
    <div className='homepage-container'>
      <div className='Video'>
        <video autoPlay muted loop>
            <source src={videoHomePage} type="video/mp4" />
        </video>
        </div>
      <div className='mainpage-content'>
        <div className='homepage-content'>
          <div className='title-one'>Make forms worth filling out</div>
        <div className='title-two'>Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.</div>
          <div className='title-three'>Get started—it's free</div>
        </div>
      </div>
    </div>
  )
}

export default HomePage