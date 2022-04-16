import React from 'react'
import logo from "../../assets/img/logo.PNG"
import useConnectWallet from '../../hooks/useConnectWallet'
import WhitelistPackage from "./WhitelistPackage"
export default function ConnectWallet() {

    const { onClickConnectWallet, account } = useConnectWallet()



    const NotAccount = () => (
        <>
            <img className="w-2/5 mx-auto" src={logo} alt="logo" ></img>
            <p className="text-white font-mono mt-10 px-10 text-center text-3xl "> Buy Nft in the Whitelist with the packs Basic, Medium and Premium. </p>
            <button onClick={onClickConnectWallet} className="mx-auto p-2 my-16 w-[15rem] bg-[#149fd6] hover:scale-110 transition-all duration-200 rounded-xl text-white text-xl"> Connect Wallet </button>
        </>
    )

    const Account = () => (
        <>
            <WhitelistPackage />
            <p className="text-[#beb9b9] font-mono  px-10 text-center text-lg my-16 break-all"> Wallet: {account} </p>
        </>
    )







    return (
        <section className="w-full lg:w-3/6 text-center pb-[100px]  ">
            {account ? <Account /> : <NotAccount />}
            <p className="text-[#beb9b9] font-mono  px-10 text-center text-sm  "> Having Trouble? Contact us at test@test.com </p>
        </section>
    )
}
