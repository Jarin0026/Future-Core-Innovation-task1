import React from 'react'
import databiz from "../images/databiz.svg"
import audio from "../images/audiophile.svg"
import meet from "../images/meet.svg"
import maker from "../images/maker.svg"
import desktop from "../images/desktop.png"

function Content() {
  return (
    <div className='container'>
        <div>
            <h1>Make remote work</h1>
            <p>Get your team in sync, no matter your location. <br /> Streamline processes, create team rituals, and watch productivity soar.</p>
            <button>Learn more</button>
            <div className='companyLogo'>
                <div> <img src={databiz} alt="" /> </div>
                <div> <img src={audio} alt="" /> </div>
                <div> <img src={meet} alt="" /> </div>
                <div> <img src={maker} alt="" /> </div>
            </div>
        </div>

        <div className='desktop'>
            <img src={desktop} alt=""/>
        </div>
    </div>
  )
}

export default Content
