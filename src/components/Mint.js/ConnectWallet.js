import React, { useState } from 'react'
import logo from "../../assets/img/logo.PNG"
import useConnectWallet from '../../hooks/useConnectWallet'
import ViewNftMinted from './ViewNftMinted'
import WhitelistPackage from "./WhitelistPackage"
export default function ConnectWallet() {

    const { onClickConnectWallet, account, priceCards, buyNft, loading, nftMinted, nftMintedPackage } = useConnectWallet()
    const [viewNft, setViewNft] = useState(false)

    const NotAccount = () => (
        <>
            <img className="w-2/5 mx-auto" src={logo} alt="logo" ></img>
            <p className="text-white font-mono mt-10 px-10 text-center text-3xl "> Buy Nft in the Whitelist with the packs Basic, Medium and Premium. </p>
            <button onClick={onClickConnectWallet} className="mx-auto p-2 my-16 w-[15rem] bg-[#149fd6] hover:scale-110 transition-all duration-200 rounded-xl text-white text-xl"> Connect Wallet </button>
        </>
    )

    const Account = () => (
        <>
            <WhitelistPackage priceCards={priceCards} buyNft={buyNft} loading={loading} />
            <p className="text-[#beb9b9] font-mono  px-10 text-center text-lg my-2 break-all"> Wallet: {account} </p>
        </>
    )
    return (
        <section className={`w-full ${account ? "lg:w-full" : "lg:w-3/6 "} text-center  pb-[70px]  `}>
            {(account && !loading) && <>
                <div onClick={() => { setViewNft(!viewNft) }} className="absolute top-5 left-5 bg-[#afd0d7] rounded-full items-center p-2 flex cursor-pointer">
                    {viewNft
                        ? <span className="text-white text-xl font-bold px-2">Back to shop </span>
                        : <>
                            <div className="bg-[#149fd6] rounded-full h-[2rem] w-[2rem] mr-2"><span className=" text-center font-bold text-xl  text-white "> {nftMinted?.total || 0} </span></div>
                            <span className="text-white text-xl font-bold">View Nft Minted </span>
                        </>}

                </div>
            </>}
            {viewNft ? <ViewNftMinted nftMintedPackage={nftMintedPackage} nftMinted={nftMinted} /> : <>  {account ? <Account /> : <NotAccount />} </>}

        </section>
    )
}
