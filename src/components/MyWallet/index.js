import React, { useState } from 'react';
import './MyWallet.css';

import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Web3Button, Web3Modal } from '@web3modal/react'

import { HiSortDescending, HiSortAscending } from 'react-icons/hi';

function MyWallet() {

    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })

    if (isConnected) return <div>
        <div className='Soon'>
            <h2>Coming Soon...</h2>
        </div>

        <div className='MyWalletSeccion'>

            <div className='MyWalletBoxes'>

                <div className='WalletBox'>
                    <h3>Current blance</h3>
                    <p>The current balance of $BONS in your wallet</p>
                    <h3>0 $BONS</h3>
                    <p>$NaN USD</p>
                </div>

                <div className='WalletBox'>
                    <h3>Total Rewards</h3>
                    <p>The total rewards you have received</p>
                    <h3>0 $BONS</h3>
                </div>

                <div className='WalletBox'>
                    <h3>Total Pending Rewards</h3>
                    <p>Rewards which are pending to be claimed</p>
                    <h3>0 $BONS</h3>
                    <p>$0 USD</p>
                </div>

                <div className='WalletBox'>
                    <h3>Current Claim Tax</h3>
                    <p>Next reduction in: Maximum Discount Reached</p>
                    <h3>0%</h3>
                </div>

                <div className='WalletBox'>
                    <h3>Next Reward</h3>
                    <p>Estimated time until the next reward payout</p>
                    <h3>0h 00m 00s</h3>
                </div>

                <div className='WalletBox'>
                    <h3>Last Claimed</h3>
                    <p>Time you last claimed rewards</p>
                    <h3>-</h3>
                </div>

                <div className='WalletBox'>
                    <h3>Owned Nodes</h3>
                    <p>Your total owned nodes</p>
                    <h3>0</h3>
                    <p>Purchased: 0, : 0</p>
                    <p>Undamaged: 0, : 0</p>
                </div>

                <div className='WalletBox'>
                    <h3>Maintenance Fee</h3>
                    <p>The amount due and its due date (Pay in Settings)</p>
                    <h3>0 $BONS</h3>
                </div>

            </div>

            <div className='WalletBtn'>
                <div className='WalletBtnSec'>

                    <div className='WBtn'>
                        <h4>Settings</h4>
                        <p>More Options</p>
                    </div>

                    <div className='WBtn'>
                        <h4>Claim</h4>
                        <p>Rewards</p>
                    </div>

                    <div className='WBtn'>
                        <h4>Purchase</h4>
                        <p>New Node</p>
                    </div>

                </div>
                <div className='WalletSort'>
                    <div className='WlletFix'>
                        <p className='PBtn'>Sort by</p>
                        <p>ASC</p>
                        <span>|</span>
                        <p><HiSortAscending size='1.3rem' /></p>
                        <p><HiSortDescending size='1.3rem' /></p>
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
export default MyWallet;