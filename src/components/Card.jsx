import React, {useState} from "react";

import Box from '../images/image-equilibrium.jpg';
import Avatar from '../images/image-avatar.png';
import {ReactComponent as ETH} from '../images/icon-ethereum.svg';
import {ReactComponent as Eye} from '../images/icon-view.svg';
import {ReactComponent as Clock} from '../images/icon-clock.svg';

const Card = () => {
  const [showOverlay, SetShowOverlay] = useState(true)

    const handleShowOverlay = () => {
      SetShowOverlay(!showOverlay)
    }

  return (
    <main className="card_container_main">
      <section className="card">
          <div className="imageContainer">
            <div className= {`${showOverlay?"image_overlay":"overlay_hide"}`}>
              <Eye onClick={handleShowOverlay}/>
            </div>
            <img src={Box} alt="cube" />
          </div>

        <div className="details_main">
          <h1>Equilibrium #3429</h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
        </div>
        <div className="data_and_remaining_time">
          <div className="eth_val"> < ETH /> <span>0.041 ETH </span> </div>
          <div className="days_left"> <Clock /> 3 days left</div>
        </div>
        <div className="creator_detail">
          <img src={Avatar} alt="avatar" />
          <p>Creation of <a href="#">Jules Wyvern</a></p>
        </div>
      </section>
    </main>
  )
}

export default Card;