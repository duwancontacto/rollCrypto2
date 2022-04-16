import React, { useEffect } from 'react'
import { ConnectWallet } from '../store/actions/Web3Actions'
import { useDispatch } from "react-redux"

import { useWeb3React } from '@web3-react/core'
import { injected } from '../utils/connectors'

export default function useConnectWallet() {

    const { library, activate, account } = useWeb3React()
    const dispatch = useDispatch()


    const onClickConnectWallet = async () => {
        if (window.ethereum) {
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        chainId: `0x${Number(80001).toString(16)}`,
                        chainName: "Matic(Polygon) Mumbai Testnet",
                        nativeCurrency: { name: "tMATIC", symbol: "tMATIC", decimals: 18 },
                        rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
                        blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
                    }
                ]
            });
            await activate(injected)

        }

    }


    useEffect(() => {
        if (account) dispatch(ConnectWallet(account))
    }, [account])



    return { account, onClickConnectWallet }
}
