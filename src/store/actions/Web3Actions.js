import { CONNECT_WALLET } from "../types/index"

//Connect Wallet 
export function ConnectWallet(account) {

    console.log("desde actions")

    return (dispatch) => {
        dispatch({
            type: CONNECT_WALLET,
            payload: account
        })
    }

}