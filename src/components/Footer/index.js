import React, { useState, useEffect } from 'react';
import '../Footer/Footer.css'

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { GoCopy } from 'react-icons/go';

const Footer = () => {

    const [showList, setShowList] = useState(false);

    const handleMouseEnter = () => {
        setShowList(true);
    };

    const handleMouseLeave = () => {
        setShowList(false);
    };

    return (
        <div>
            <div className='FooterSection'>
                <div className='FooterBox'>
                    <p>Copyright © 2023 BONSAI | All Rights Reserved</p>
                </div>
                <div
                    className='FooterContract'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <p>Contracts Addresses {showList ? <IoIosArrowUp size='1rem' /> : <IoIosArrowDown size='1rem' />}</p>
                    {showList && (
                        <div className='ContractList'>
                            <div className='List'><p>Node Contract  </p><p><GoCopy size='0.8rem' /></p></div>
                            <div className='List'><p>$BONS Contract </p><p><GoCopy size='0.8rem' /></p></div>
                            <div className='List'><p>Launchpad Contract </p><p><GoCopy size='0.8rem' /></p></div>
                            <div className='List'><p>CroSwap Consumable Contract </p><p><GoCopy size='0.8rem' /></p></div>
                            <div className='List'><p>Supply Vessel Contract </p><p><GoCopy size='0.8rem' /></p></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Footer