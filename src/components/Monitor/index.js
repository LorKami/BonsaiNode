import React, { useEffect, useState } from 'react';
import '../Monitor/Monitor.css';

import bonsai1 from '../../images/bonsai1.png';
import bonsai3 from '../../images/bonsai3.png';


const Monitor = () => {
  return (
    <div>

      <div className='MonitorSection'>

        <div className='MonitorBoxes'>

          <div className='MonitorBonsai'>
            <img src={bonsai1} />
          </div>

          <div className='MonitorIntro'>

            <div className='MonitorInfo'>
              <h2>WELCOME TO BONSAI</h2>
              <div className='MonitorInfoText'>
                <p>Behold the majestic sight as our magnificent Bonsai trees take root within the Solana ecosystem!</p>
                <div id="crypto-widget-CoinList" data-transparent="true" data-theme="dark" data-design="modern" data-coin-ids="166,1120"></div>
              </div>
            </div>

            <div className='MonitorButtons'>
              <a href='#' target='_blank'>Read Whitepaper</a>
              <a href='#' target='_blank'>Buy $BONS</a>
            </div>

          </div>

        </div>
      </div>


    </div>
  )
}

export default Monitor