import React, { useState } from 'react';
import Header from './pages/Header/Header';
import Page from './pages/Page/Page'
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('/')
  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Page currentPage={currentPage} />
    </>
  );
}

export default App;
