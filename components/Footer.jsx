import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 LR House All rights reserverd</p>
      <p className="icons">
        <a href="https://github.com/riyajath-ahamed">

        <AiOutlineGithub/>
        </a>
      </p>
    </div>
  )
}

export default Footer