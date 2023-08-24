import React from 'react';
import Home from "./pages/Home";
import Error from "./pages/Error";
import Navbar from './components/Navbar';
import Mint from './components/Minting';
import Statistics from './components/Statistics';
import MyWallet from './components/MyWallet'
import Footer from './components/Footer'

import { HashRouter, Routes, Route } from "react-router-dom";

import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

const App = () => {

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [publicProvider()],
  )

  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
  })

  return (
    <div className="App">
      <WagmiConfig config={config}>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Minting" element={<Mint />} />
            <Route path="MyWallet" element={<MyWallet />} />
            <Route path="Statistics" element={<Statistics />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </HashRouter>
      </WagmiConfig>
    </div>
  );
}

export default App;
