import React from 'react'

import Footer from '../Footer'
import ConnectWallet from './ConnectWallet'
import PresentationImage from './PresentationImage'
import { useWeb3React } from '@web3-react/core'

export default function Mint() {
    const { activate, account } = useWeb3React()

    return (
        <div className='min-h-[100vh] h-[100%] p-0  lg:p-10 lg:px-20 relative z-[100] flex flex-col lg:flex-row items-center fondo'>
            <ConnectWallet />
            {!account && <PresentationImage />}
            <Footer bottom={"bottom-5"} />
        </div>
    )
} 
