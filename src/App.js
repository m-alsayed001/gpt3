import React from 'react';

import { Footer, Blog , Possibility , Features , Header, WhatGPT3} from './containers';
import { CTA , Brand , Navbar} from './components';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App