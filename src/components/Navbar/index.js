import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal, Web3Button, Web3NetworkSwitch } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { base } from 'wagmi/chains'

import { FaTwitter, FaLink, FaDiscord, FaTelegramPlane, FaGithub } from 'react-icons/fa';

const chains = [base]
const projectId = process.env.REACT_APP_PROJECT_ID

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function Navbar() {

    return (
        <div>

            <WagmiConfig config={wagmiConfig}>
                <div className='NavbarSection'>
                    <div className='Navbarboxes'>
                        <div className='NavbarMenuLeft'>
                            <div className='NavbarMenuLeftFix'>
                                <Link to='/'><p>Home</p></Link>
                                <Link to='/MyWallet'><p>Wallet</p></Link>
                                <Link to='/Statistics'><p>Statistics</p></Link>
                                <Link to='/Minting'><p>Mint</p></Link>
                            </div>
                        </div>
                        <div className='NavbarLogoCenter'>
                            <h2>BONSAI</h2>
                        </div>
                        <div className='NavbarSocialsRight'>
                            <div className='NavbarSocialsRightFix'>
                                <a href='https://twitter.com/' target='_blank'><FaTwitter size='1.4rem' /></a>
                                <a><FaTelegramPlane size='1.5rem' /></a>
                                <a><FaGithub size='1.5rem' /></a>
                                <a><FaDiscord size='1.5rem' /></a>
                                <a href='#' target='_blank'><FaLink size='1.3rem' /></a>
                            </div>
                            <Web3Button />
                        </div>
                    </div>
                </div>
            </WagmiConfig>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient}
                themeVariables={{
                    '--w3m-accent-color': '#40513B',
                    '--w3m-accent-fill-color': '#EDF1D6',
                    '--w3m-background-color': '#40513B',
                }}
            />

        </div>
    )
}

export default Navbar