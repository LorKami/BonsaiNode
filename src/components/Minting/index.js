import React, { useState } from 'react';
import './Minting.css';

import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Web3Button, Web3Modal } from '@web3modal/react'

import { AiOutlineAlignRight } from 'react-icons/ai';

import Bronze from '../../images/bonsai1.png'
import Silver from '../../images/bonsai2.png'
import Gold from '../../images/bonsai3.png'


function Minting() {

    const [selectedImage, setSelectedImage] = useState(Bronze);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleButtonClick = (image) => {
        setSelectedImage(image);
    };

    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })

    if (isConnected) return <div>

        <div className='MintingSection'>

            <div className='MintInfo'>

                <div className='MintBox'>
                    <div className='MintTitle'>
                        <h3>Mint Price</h3>
                        <p>The price to mint a NFT of this type</p>
                    </div>
                    <div className='MintPrice'>
                        {selectedImage === Bronze && <h3>300 $BONS</h3>}
                        {selectedImage === Silver && <h3>800 $BONS</h3>}
                        {selectedImage === Gold && <h3>100 $BONS</h3>}
                        <p>$0 USD</p>
                    </div>
                </div>

                <div className='MintBox'>
                    <div className='MintTitle'>
                        <h3>Tax reduction</h3>
                        <p>The tax reduction provided by this type of NFT</p>
                    </div>
                    <div className='MintPrice'>
                        {selectedImage === Bronze && <h3>3%</h3>}
                        {selectedImage === Silver && <h3>2%</h3>}
                        {selectedImage === Gold && <h3>5%</h3>}
                    </div>
                </div>

                <div className='MintBox'>
                    <div className='MintTitle'>
                        <h3>NFT's available</h3>
                        <p>NFTs available to mint of this type</p>
                    </div>
                    <div className='MintPrice'>
                        {selectedImage === Bronze && <h3>1000</h3>}
                        {selectedImage === Silver && <h3>500</h3>}
                        {selectedImage === Gold && <h3>100</h3>}
                        {selectedImage === Bronze && <p>/1000</p>}
                        {selectedImage === Silver && <p>/500</p>}
                        {selectedImage === Gold && <p>/100</p>}
                    </div>
                </div>

            </div>

            <div className='MintImages'>
                <div className='MintImagesBox'>
                    <img
                        src={Bronze}
                        alt="Bronze"
                        className={selectedImage === Bronze ? 'SelectedImage' : ''}
                        onClick={() => handleImageClick(Bronze)}
                    />
                    <img
                        src={Silver}
                        alt="Silver"
                        className={selectedImage === Silver ? 'SelectedImage' : ''}
                        onClick={() => handleImageClick(Silver)}
                    />
                    <img
                        src={Gold}
                        alt="Gold"
                        className={selectedImage === Gold ? 'SelectedImage' : ''}
                        onClick={() => handleImageClick(Gold)}
                    />
                </div>
                <div className='MintImagesSelector'>
                    <h3>Choose type</h3>
                    <div className='MintBtnSelector'>

                        <div className='MintBtns'>
                            <button
                                className={selectedImage === Bronze ? 'SelectedButton' : ''}
                                onClick={() => handleButtonClick(Bronze)}
                            >Bronze</button>
                            <div className='MintBtnsText'>
                                <AiOutlineAlignRight size='1rem' /><p>1 available</p>
                            </div>
                        </div>

                        <div className='MintBtns'>
                            <button
                                className={selectedImage === Silver ? 'SelectedButton' : ''}
                                onClick={() => handleButtonClick(Silver)}
                            >Silver</button>
                            <div className='MintBtnsText'>
                                <AiOutlineAlignRight size='1rem' /><p>1 available</p>
                            </div>
                        </div>

                        <div className='MintBtns'>
                            <button
                                className={selectedImage === Gold ? 'SelectedButton' : ''}
                                onClick={() => handleButtonClick(Gold)}
                            >Gold</button>
                            <div className='MintBtnsText'>
                                <AiOutlineAlignRight size='1rem' /><p>1 available</p>
                            </div>
                        </div>

                    </div>
                    <div className='MintBtnMint'>
                        <button>MINT</button>
                        {selectedImage === Bronze && <p>300 $BONS</p>}
                        {selectedImage === Silver && <p>800 $BONS</p>}
                        {selectedImage === Gold && <p>100 $BONS</p>}
                    </div>
                </div>
            </div>

        </div>

    </div>

    return <div className='Disclaimer'>
        <Web3Button />
        <Web3Modal
            themeVariables={{
                '--w3m-accent-color': '#40513B',
                '--w3m-accent-fill-color': '#EDF1D6',
                '--w3m-background-color': '#40513B',
            }}
        />
    </div>
}
export default Minting;