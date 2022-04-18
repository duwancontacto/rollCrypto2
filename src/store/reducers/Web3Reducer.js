import { CONNECT_WALLET } from "../types/index"


const initialState = {

    account: null,
    contract: null,


}


export default function web3Reducer(state = initialState, action) {

    switch (action.type) {
        case CONNECT_WALLET: return { ...state, account: action.payload }
        default: return state;

    }


}