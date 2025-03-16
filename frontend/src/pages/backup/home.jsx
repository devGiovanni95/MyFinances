// src/App.js
import { FcMenu } from "react-icons/fc";
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import './App.css'; // Estilos do App
import { Row, Col, Card } from 'react-bootstrap';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Row style={{display:"flex",background:"red"}} md={12}>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", textAlign:"center", width:"100vw"}}>
            <button className="menu-btn" onClick={toggleSidebar}>
                    {isOpen ? <FcMenu /> : <FcMenu />}
                </button>
                    <h1 style={{textAlign:"center", width:"95vw"}}>Bem-vindo ao My Finance</h1>
            </div>      
        </Row>
    </div>
  );
};

export default App;
