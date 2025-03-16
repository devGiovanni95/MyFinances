// src/App.js
import { FcMenu } from "react-icons/fc";
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import './App.css'; // Estilos do App
import { Row, Col, Card} from 'react-bootstrap';
import AccoutIndividual from "../../components/AccoutIndividual/AccoutIndividual.jsx";
import Revenue from "../../components/Revenue/Revenue.jsx";
import CreditCard from "../../components/CreditCard/CreditCard.jsx";

const creditCards = [
  {
    card: "Nubank",
    status: "pendente",
    transactions: [
      { name: "Loja 1", amount: 25, date: "25/03/2025", monthly: false, description: "1/2" },
      { name: "Loja 2", amount: 25, date: "25/03/2025", monthly: false, description: "1/2" }
    ]
  },
  {
    card: "Inter",
    status: "pago",
    transactions: [
      { name: "Loja A", amount: 50, date: "15/03/2025", monthly: true, description: "Assinatura" },
      { name: "Loja B", amount: 100, date: "20/03/2025", monthly: false, description: "Compra" }
    ]
  }
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app" style={{backgroundColor:"#747572"}}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Row style={{display:"flex",background:"#0B4F6C"}} md={12}>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", textAlign:"center", width:"100vw"}}>
            <button className="menu-btn" onClick={toggleSidebar}>
                    {isOpen ? <FcMenu /> : <FcMenu />}
                </button>
                    <h1 style={{textAlign:"center", width:"95vw"}}>My Finance</h1>
            </div>      
        </Row>

        <Row>
          <div style={{textAlign: "center"}}>
            <h1>
              {/* Boa tarde Giovanni */}
            </h1>
            <h2>
              Contas referente ao mês Dezembro
            </h2>
            <div  style={{textAlign: "center", justifyContent:"center", display:"flex" }}>
                <p style={{display:"flex" , flexDirection: "row", width:"30vh", alignItems:"center", border: "2px black solid", padding: "20px", borderTopLeftRadius:25, borderBottomLeftRadius:25}}> Meu saldo em conta <span style={{marginLeft:20, fontSize:25, color: "green"}}>5000</span> </p>
                <p style={{display:"flex" , flexDirection: "row", width:"30vh", alignItems:"center", border: "2px black solid", padding: "20px"}}> Contas a pagar <span style={{marginLeft:20, fontSize:25, color: "red"}}>5000</span> </p>
                <p style={{display:"flex" , flexDirection: "row", width:"30vh", alignItems:"center", border: "2px black solid", padding: "20px", borderTopRightRadius:25, borderBottomRightRadius:25}}> Contas pagas <span style={{marginLeft:20, fontSize:25, color: "blue"}}>5000</span> </p>
            </div>
          </div>
        </Row>

        <Row style={{padding:20, display:"flex", flexDirection:"row"}}>
          <AccoutIndividual/>
          
          <Revenue/>
        </Row>

        <Row >
          <div style={{textAlign: "center"}}>
              <h1>Cartões de Crédito</h1>
          </div>

          <div style={{  display: "flex",justifyContent: "center",flexWrap: "wrap"}}>
            {creditCards.map((card) => (
              <CreditCard key={card.card} cardData={card} />
            ))}
          </div>
        </Row>  

        <Row></Row>
    </div>
  );
};

export default App;
