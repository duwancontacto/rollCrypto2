import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoadingSuspente from './components/LoadingSuspente'
import { Provider } from "react-redux"
import store from "./store/store"

import { Web3ReactProvider } from "@web3-react/core"
import Web3 from "web3"

function getLibrary(provider) {
  return new Web3(provider)
}


const Landing = lazy(() => import("./components/Landing"))
const Mint = lazy(() => import("./components/Mint.js/Mint"))


export default function App() {

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Suspense fallback={<LoadingSuspente />}> <Landing /> </Suspense>} />
            <Route path="/whitelist" element={<Suspense fallback={<LoadingSuspente />}> <Mint /> </Suspense>} />
          </Routes>
        </Router>
      </Provider>
    </Web3ReactProvider>
  )
}



