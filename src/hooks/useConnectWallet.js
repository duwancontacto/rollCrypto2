import { useEffect, useState } from 'react'
import { ConnectWallet } from '../store/actions/Web3Actions'
import { useDispatch } from "react-redux"

import { useWeb3React } from '@web3-react/core'
import { injected } from '../utils/connectors'
import connectContract from '../utils/contractStore'

export default function useConnectWallet() {
    const dispatch = useDispatch()

    const { activate, account, library } = useWeb3React()
    const [contract, setContract] = useState(null)
    const [priceCards, setPriceCards] = useState(null)
    const [loading, setLoading] = useState(false)
    const [nftMinted, setNftMinted] = useState(null)
    const [nftMintedPackage, setNftMintedPackage] = useState(null)

    const onClickConnectWallet = async () => {
        if (window.ethereum) {

            window.ethereum?.request({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        chainId: `0x38`,
                        chainName: "Binance Smart Chain",
                        nativeCurrency: {
                            name: "Binance Coin",
                            symbol: "BNB",
                            decimals: 18
                        },
                        rpcUrls: ['https://bsc-dataseed.binance.org/'],
                        blockExplorerUrls: ['https://bscscan.com']
                    }
                ]
            });
            await activate(injected)

        }

    }

    const connectContractNft = async () => {
        let result = await connectContract("0x1DDCC98f6C662E01e9Aa4554C32B5097C1D0987e", library)

        let price1 = await result.methods.pricePerNFT(0).call({ from: account })
        let price2 = await result.methods.pricePerNFT(1).call({ from: account })
        let price3 = await result.methods.pricePerNFT(2).call({ from: account })

        setPriceCards([parseInt(price1) / Math.pow(10, 18), parseInt(price2) / Math.pow(10, 18), parseInt(price3) / Math.pow(10, 18)])

        setContract(result)
        getNftMinted(result)
        getNftByPackage(result)
        dispatch(ConnectWallet(account))
    }


    useEffect(() => {
        if (account) connectContractNft()
    }, [account])


    const buyNft = async (nftId) => {
        setLoading(true)

        contract.methods.buy().send({ from: account, value: priceCards[nftId] * Math.pow(10, 18) })
            .then(result => { setLoading(false); getNftMinted(contract); getNftByPackage(contract) })
            .catch(err => setLoading(false))

    }

    const getNftMinted = async (contract) => {

        let nftMintedtemp = []
        await contract.methods.balanceOf(account, 0).call({ from: account }).then(result => nftMintedtemp.push(parseInt(result))).catch(err => console.log(err))
        await contract.methods.balanceOf(account, 1).call({ from: account }).then(result => nftMintedtemp.push(parseInt(result))).catch(err => console.log(err))
        await contract.methods.balanceOf(account, 2).call({ from: account }).then(result => nftMintedtemp.push(parseInt(result))).catch(err => console.log(err))
        await contract.methods.balanceOf(account, 3).call({ from: account }).then(result => nftMintedtemp.push(parseInt(result))).catch(err => console.log(err))
        await contract.methods.balanceOf(account, 4).call({ from: account }).then(result => nftMintedtemp.push(parseInt(result))).catch(err => console.log(err))

        setNftMinted({ total: nftMintedtemp[0] + nftMintedtemp[1] + nftMintedtemp[2] + nftMintedtemp[3] + nftMintedtemp[4], nftMintedtemp })

    }

    const getNftByPackage = (contract) => {


        contract.methods.getMintedPacked(account)
            .call({ from: account })
            .then(result => setNftMintedPackage(result))
            .catch(err => console.log(err))


    }



    return { priceCards, account, onClickConnectWallet, buyNft, loading, nftMinted, nftMintedPackage }
}
