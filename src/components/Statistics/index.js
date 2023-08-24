import React, { useState } from 'react';
import './Statistics.css'

import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Web3Button, Web3Modal } from '@web3modal/react'

function Statistics() {

    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })

    if (isConnected) return <div>

        <div className='StatisticsMonitor'>
            <div className='StaticsBoxes'>

                <div className='Stabox'>
                    <h3>Total active nodes</h3>
                    <p>The curent total active nodes</p>
                    <h3>100,000</h3>
                </div>

                <div className='Stabox'>
                    <h3>Last payout</h3>
                    <p>The last rewards paid out per node</p>
                    <h3>0.0000 $BONS</h3>
                    <p>$0 USD</p>
                </div>

                <div className='Stabox'>
                    <h3>Next Payout (Estimated)</h3>
                    <p>The next rewards (estimated) to be paid out per node.</p>
                    <h3>0.0000 $BONS</h3>
                    <p>$0 USD</p>
                    <span>Payout subject to change without notice due to ARM</span>
                </div>

                <div className='Stabox'>
                    <h3>Node Reward Vault</h3>
                    <p>Pool of $BONS used to pay out nodes every 24 hours</p>
                    <h3>0.0000 $BONS</h3>
                    <p>$.-.</p>
                </div>

            </div>

            <div className='StatisticsGraph'>
                <div id="dexscreener-embed">
                    <iframe src="https://dexscreener.com/ethereum/0x3416cF6C708Da44DB2624D63ea0AAef7113527C6?embed=1&theme=dark">
                    </iframe>
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
export default Statistics;