import { useState } from 'react'
import nft1 from "../../assets/img/nft1copy.mp4"
import cerdo from "../../assets/img/cerdoCopy.mp4"
import intwolf from "../../assets/img/intwolfCopy.mp4"
import nft2 from "../../assets/img/nft2copy.mp4"
import nft3 from "../../assets/img/nft3Copy.mp4"
export default function ViewNftMinted({ nftMinted, nftMintedPackage }) {


    const [step, setStep] = useState(0)


    const returnColorBorder = (id) => {

        let color;
        switch (id) {
            case "1": color = "border-[#919191]"; break;
            case "2": color = "border-[#8be129]"; break;
            case "3": color = "border-[#fa6c53]"; break;
        }

        return color

    }


    const PackageItem = ({ id, index }) => {
        return (<div className=" text-left relative m-5">
            {id === "1" && <h3 className="text-white fond-bold text-xl top-2 left-2 py-1 px-2 absolute bg-[#919191] rounded-3xl" style={{ textShadow: "0px 0px 10px #fff" }}>  Commun Package</h3>}
            {id === "2" && <h3 className="text-white fond-bold text-xl top-2 left-2 py-1 px-2 absolute bg-[#8be129] rounded-3xl" style={{ textShadow: "0px 0px 10px #fff" }}>  Epic Package</h3>}
            {id === "3" && <h3 className="text-white fond-bold text-xl top-2 left-2 py-1 px-2 absolute bg-[#fa6c53] rounded-3xl" style={{ textShadow: "0px 0px 10px #fff" }}>  Legendary Package</h3>}

            {nftMintedPackage[1][index] === "0" && < video autoPlay loop className={`w-[24rem] rounded-md border-2 ${returnColorBorder(id)}  `} > <source src={nft1}></source></video>}
            {nftMintedPackage[1][index] === "1" && < video autoPlay loop className={`w-[24rem] rounded-md border-2 ${returnColorBorder(id)}  `} > <source src={cerdo}></source></video>}
            {nftMintedPackage[1][index] === "2" && < video autoPlay loop className={`w-[24rem] rounded-md border-2 ${returnColorBorder(id)}  `} > <source src={intwolf}></source></video>}
            {nftMintedPackage[1][index] === "3" && < video autoPlay loop className={`w-[24rem] rounded-md border-2 ${returnColorBorder(id)}  `} > <source src={nft2}></source></video>}
            {nftMintedPackage[1][index] === "4" && < video autoPlay loop className={`w-[24rem] rounded-md border-2 ${returnColorBorder(id)}  `} > <source src={nft3}></source></video>}
        </div>)
    }



    return (
        <>
            <section className="flex flex-wrap justify-center items-center mt-20 md:mt-10">

                <h3 onClick={() => { setStep(0) }} className={`cursor-pointer text-[40px] font-bold  ${step === 0 ? "text-[#f6bd60]" : "text-white"}    font-titulo text-center`}>Nft Minted</h3>
                <p className="text-[#fff] text-[40px] mb-4 mx-10"> / </p>
                <h3 onClick={() => { setStep(1) }} className={`cursor-pointer text-[40px] font-bold  ${step === 1 ? "text-[#f6bd60]" : "text-white"} hover:text-[#f6bd60]  text-[#f6bd60]  font-titulo text-center`}>Nft Minted By Package</h3>
            </section>

            {step === 0 && <div className="flex flex-wrap justify-around">

                <div className="relative overflow-hidden border-2 border-[#9fc474]  m-3 rounded-md hover:scale-105 transition-all duration-300">
                    <p className="bg-[#9fc474] top-6 absolute text-white font-bold -left-8 w-[8rem] -rotate-45"> {nftMinted?.nftMintedtemp[0]} Minted </p>
                    <video autoPlay loop className="w-[24rem] rounded-md  " >
                        <source src={nft1}></source>
                    </video>
                </div>
                <div className="relative overflow-hidden border-2 border-[#d074c6]  m-3 rounded-md hover:scale-105 transition-all duration-300">
                    <p className="bg-[#d074c6] top-6 absolute text-white font-bold -left-8 w-[8rem] -rotate-45"> {nftMinted?.nftMintedtemp[1]} Minted </p>
                    <video autoPlay loop className="w-[24rem] rounded-md  " >
                        <source src={cerdo}></source>
                    </video>
                </div>
                <div className="relative overflow-hidden border-2 border-[#b64dba]  m-3 rounded-md hover:scale-105 transition-all duration-300">
                    <p className="bg-[#b64dba] top-6 absolute text-white font-bold -left-8 w-[8rem] -rotate-45"> {nftMinted?.nftMintedtemp[2]} Minted </p>
                    <video autoPlay loop className="w-[24rem] rounded-md  " >
                        <source src={intwolf}></source>
                    </video>
                </div>
                <div className="relative overflow-hidden border-2 border-[#d817df]  m-3 rounded-md hover:scale-105 transition-all duration-300">
                    <p className="bg-[#d817df] top-6 absolute text-white font-bold -left-8 w-[8rem] -rotate-45"> {nftMinted?.nftMintedtemp[3]} Minted </p>
                    <video autoPlay loop className="w-[24rem] rounded-md  " >
                        <source src={nft2}></source>
                    </video>
                </div>
                <div className="relative overflow-hidden border-2 border-[#8be129]  m-3 rounded-md hover:scale-105 transition-all duration-300">
                    <p className="bg-[#8be129] top-6 absolute text-white font-bold -left-8 w-[8rem] -rotate-45"> {nftMinted?.nftMintedtemp[4]} Minted </p>
                    <video autoPlay loop className="w-[24rem] rounded-md  " >
                        <source src={nft3}></source>
                    </video>
                </div>
            </div>}

            {step === 1 &&
                <div className="flex flex-wrap  justify-around items-start mt-10">
                    {nftMintedPackage && nftMintedPackage[0]?.length > 0 && nftMintedPackage[0].map((id, index) => <PackageItem key={index} id={id} index={index} />)}
                </div>
            }


        </>
    )
}
