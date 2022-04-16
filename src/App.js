import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoadingSuspente from './components/LoadingSuspente'
const Landing = lazy(() => import("./components/Landing"))
const Mint = lazy(() => import("./components/Mint.js/Mint"))

export default function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Suspense fallback={<LoadingSuspente />}> <Landing /> </Suspense>} />
        <Route path="/whitelist" element={<Suspense fallback={<LoadingSuspente />}> <Mint /> </Suspense>} />

      </Routes>
    </Router>
  )
}



