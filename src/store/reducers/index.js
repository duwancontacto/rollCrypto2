import { combineReducers } from "redux";
import Web3Reducer from "./Web3Reducer";


export default combineReducers({
    web3: Web3Reducer
})