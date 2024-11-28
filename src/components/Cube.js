import React from 'react'
import './Cube.css'
import image1 from '../images/CubeImage1.jpg'
import gitLogo from '../images/icons8-github-24.png'
import image2 from '../images/linkedinLogo.jpeg'
import linkLogo from '../images/icons8-linkedin-logo-50.png'
import image3 from '../images/gfgImage.jpg'
import gfgLogo from '../images/icons8-geeksforgeeks-48.png'

function Cube() {
  return (
 
    <div className="scene">
    <div className="cube">
      <div className="face front">
        <a href="https://github.com/Amitkumar9027" target="_blank" rel="noopener noreferrer">
          <img src={image1} alt="Front" />
          <div className='cubeDetails'>
          <h2 className='cubeHeading'>GitHub</h2>
          <img src={gitLogo} className='gitLogoImg' 
          style={{width:'20px', height:'20px'}}
          />
          </div>
        </a>
      </div>
      <div className="face back">
     
      </div>
      <div className="face right">
        <h2 className='rightH2'>Mobile No:</h2>
        <p className='rightP'>+919027795058</p>
      </div>
      <div className="face left">
     
      </div>
      <div className="face top">
      <a href="https://www.linkedin.com/in/amit-kumar-1a1115280/" target="_blank" rel="noopener noreferrer">
          <img src={image2} alt="Front" />
          <div className='cubeDetails'>
          <h2 className='cubeHeading' style={{color:'white'}}>LinkedIn</h2>
          <img src={linkLogo} className='gitLogoImg' 
          style={{width:'20px', height:'20px'}}
          />
          </div>
        </a>
      </div>
      <div className="face bottom">
      <a href="https://www.geeksforgeeks.org/user/amitkumaji49/" target="_blank" rel="noopener noreferrer">
          <img src={image3} alt="Front" />
          <div className='cubeDetails'>
          <h2 className='cubeHeading' style={{color:'white'}}>GFG</h2>
          <img src={gfgLogo} className='gitLogoImg' 
          style={{width:'20px', height:'20px'}}
          />
          </div>
        </a>
      </div>
    </div>
  </div>

  )
}

export default Cube