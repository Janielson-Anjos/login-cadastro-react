// import { useState } from 'react'
// import './App.css'
import Login from './components/login/Login';
import Cadastro from './components/cadastro/Cadastro';
// import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/Login'
import CadastroPage from './pages/Cadastro';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
