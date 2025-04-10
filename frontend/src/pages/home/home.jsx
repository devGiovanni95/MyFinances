import { FcMenu,FcPrevious,FcNext  } from "react-icons/fc";
import React, { useEffect, useState, useCallback  } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Modal from 'react-modal';
import './App.css'; // Estilos do App
import { Row, Col, Card} from 'react-bootstrap';
import AccoutIndividual from "../../components/AccoutIndividual/AccoutIndividual.jsx";
import Revenue from "../../components/Revenue/Revenue.jsx";
import CreditCard from "../../components/CreditCard/CreditCard.jsx";
import CadastroModal from "../../components/ModalParcel/Modal.jsx";
import CadastroModalSeparete from "../../components/ModalSeparate/ModalSeparate.jsx";
import CadastroModalRecurrent from "../../components/ModalRecurrent/ModalRecurrent.jsx";
import ModalButton from "../../components/ModalButton/ModalButton.jsx";
import ModalButtonRevenue from "../../components/ModalButtonRevenue/ModalButton.jsx";
import CadastroModalSeparateIndividual from "../../components/ModalSeparateIndividual/ModalSeparateIndividual.jsx";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [creditCards, setCreditCards] = useState([])
  const [individualAccounts, setIndividualAccounts] = useState([])
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [year, setYear] = useState(new Date().getFullYear())
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalIndividualOpen, setIsModalIndividualOpen] = useState(false);
  const [isModalButtonOpen, setIsModalButtonOpen] = useState(false);
  const [isModalButtonRevenueOpen, setIsModalButtonRevenueOpen] = useState(false);
  const [isModalOpenRecurrent, setIsModalOpenRecurrent] = useState(false);
  const [isModalOpenSeparate, setIsModalOpenSeparate] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openButton = () => {
    setIsModalButtonOpen(true);
  };
  const openButtonRevenue = () => {
    setIsModalButtonRevenueOpen(true);
  };

  const closeButtonRevenue = () => {
    setIsModalButtonRevenueOpen(false);
  };

  const closeButton = () => {
    setIsModalButtonOpen(false);
  };

  const openModalRecurrent = () => {
    setIsModalOpenRecurrent(true);
  };

  const openModalSeparate = () => {
    setIsModalOpenSeparate(true);
  };

  const openModalIndidual = () => {
    setIsModalIndividualOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeModalIndividual = () => {
    setIsModalIndividualOpen(false);
  };

  const closeModalRecurrent = () => {
    setIsModalOpenRecurrent(false);
  };

  const closeModalSeparate = () => {
    setIsModalOpenSeparate(false);
  };

  const handleCadastroSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/transactions/monthly', { // Substitua '/transacoes' pela rota correta da sua API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
        console.log("🚀 ~ handleCadastroSubmit ~ data:", data)
  
      if (!response.ok) {
        throw new Error(`Erro ao enviar dados: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Dados enviados com sucesso:', responseData);
  
      // Aqui você pode adicionar lógica adicional, como exibir uma mensagem de sucesso
      alert('Transação cadastrada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      // Aqui você pode adicionar lógica para lidar com erros, como exibir uma mensagem de erro para o usuário
      alert(`Erro ao cadastrar transação: ${error.message}`);
    }
  };

  const handleCadastroSubmitSeparate = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/transactions', { // Substitua '/transacoes' pela rota correta da sua API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
        console.log("🚀 ~ handleCadastroSubmit ~ data:", data)
  
      if (!response.ok) {
        throw new Error(`Erro ao enviar dados: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Dados enviados com sucesso:', responseData);
  
      // Aqui você pode adicionar lógica adicional, como exibir uma mensagem de sucesso
      alert('Transação cadastrada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      // Aqui você pode adicionar lógica para lidar com erros, como exibir uma mensagem de erro para o usuário
      alert(`Erro ao cadastrar transação: ${error.message}`);
    }
  };

  const handleCadastroSubmitRecurrent = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/transactions/recurrent', { // Substitua '/transacoes' pela rota correta da sua API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
        console.log("🚀 ~ handleCadastroSubmit ~ data:", data)
  
      if (!response.ok) {
        throw new Error(`Erro ao enviar dados: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Dados enviados com sucesso:', responseData);
  
      // Aqui você pode adicionar lógica adicional, como exibir uma mensagem de sucesso
      alert('Transação cadastrada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      // Aqui você pode adicionar lógica para lidar com erros, como exibir uma mensagem de erro para o usuário
      alert(`Erro ao cadastrar transação: ${error.message}`);
    }
  };



  const handleCadastroSubmitIndividualSeparate = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/transactions/separate', { // Substitua '/transacoes' pela rota correta da sua API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
        console.log("🚀 ~ handleCadastroSubmit ~ data:", data)
  
      if (!response.ok) {
        throw new Error(`Erro ao enviar dados: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Dados enviados com sucesso:', responseData);
  
      // Aqui você pode adicionar lógica adicional, como exibir uma mensagem de sucesso
      alert('Transação cadastrada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      // Aqui você pode adicionar lógica para lidar com erros, como exibir uma mensagem de erro para o usuário
      alert(`Erro ao cadastrar transação: ${error.message}`);
    }
  };

  const handleCadastroSubmitIndividualRecurrent = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/transactions/separate/recurrent', { // Substitua '/transacoes' pela rota correta da sua API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
        console.log("🚀 ~ handleCadastroSubmit ~ data:", data)
  
      if (!response.ok) {
        throw new Error(`Erro ao enviar dados: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Dados enviados com sucesso:', responseData);
  
      // Aqui você pode adicionar lógica adicional, como exibir uma mensagem de sucesso
      alert('Transação cadastrada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      // Aqui você pode adicionar lógica para lidar com erros, como exibir uma mensagem de erro para o usuário
      alert(`Erro ao cadastrar transação: ${error.message}`);
    }
  };




  

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    async function fetchDataCard() {
      try {
        console.log(year)
        console.log(month)
        const response = await fetch(`http://localhost:5000/transactions/monthly/with-card1?year=${year}&month=${month}`); // Substitua pela sua API
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
        const data = await response.json();
        console.log("🚀 ~ fetchData ~ data:", data)
        setCreditCards(data);
      } catch (err) {
        // setError(err.message);
      }
    }

    async function fetchDataIndividual() {
      try {
        console.log(year)
        console.log(month)
        const response = await fetch(`http://localhost:5000/transactions/monthly/no-card?year=${year}&month=${month}`); // Substitua pela sua API
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
        const data = await response.json();
        console.log("🚀 ~ fetchDataIndividual:", data)
        setIndividualAccounts(data);
      } catch (err) {
        // setError(err.message);
      }
    }

    fetchDataCard();
    fetchDataIndividual();

  }, [month, year]); 

  // function addMonth(){
  //   if(month == 12){
  //     setMonth(month+1)
  //     setYear(year+1)
  //   }else{
  //     setMonth(month+1)
  //   }
  // }
  // function removeMonth(){
  //   if(month == 1){
  //     setMonth(12)
  //     setYear(year-1)
  //   }else{
  //     setMonth(month-1)
  //   }
  // }

  const addMonth = useCallback(() => {
    if (month === 12) {
      if (year !== new Date().getFullYear() + 1) { // Verificação para evitar rerenderizações desnecessárias
        setMonth(1);
        setYear(year + 1);
      }
    } else {
      if(month !== month+1){ // Verificação para evitar rerenderizações desnecessárias
        setMonth(month + 1);
      }
    }
  }, [month, year]);

  const removeMonth = useCallback(() => {
    if (month === 1) {
      if (year !== new Date().getFullYear() - 1) { // Verificação para evitar rerenderizações desnecessárias
        setMonth(12);
        setYear(year - 1);
      }
    } else {
      if(month !== month-1){ // Verificação para evitar rerenderizações desnecessárias
        setMonth(month - 1);
      }
    }
  }, [month, year]);

  return (
    
    <div className="app" style={{backgroundColor:"white"}}>
      
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <ModalButtonRevenue 
        isOpen={isModalButtonRevenueOpen}
        onRequestClose={closeButtonRevenue}
        openModalIndidual={openModalIndidual}
      />

      <ModalButton
        isOpen={isModalButtonOpen}
        onRequestClose={closeButton}
        openModalRecurrent={openModalRecurrent}
        openModal={openModal}
        openModalSeparate={openModalSeparate}
      />

      <CadastroModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onSubmit={handleCadastroSubmit}
      />

      <CadastroModalRecurrent
        isOpen={isModalOpenRecurrent}
        onRequestClose={closeModalRecurrent}
        onSubmit={handleCadastroSubmitRecurrent}
      />

      <CadastroModalSeparete
        isOpen={isModalOpenSeparate}
        onRequestClose={closeModalSeparate}
        onSubmit={handleCadastroSubmitSeparate}
      />

      <CadastroModalSeparateIndividual 
        isOpen={isModalIndividualOpen}
        onSubmit={handleCadastroSubmitIndividualSeparate}
        onRequestClose={closeModalIndividual}
      />

        <Row style={{display:"flex",background:"#aeb4a9"}} md={12}>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", textAlign:"center", width:"100vw"}}>
            <button className="menu-btn" onClick={toggleSidebar}>
                    {isOpen ? <FcMenu /> : <FcMenu />}
                </button>
                    <h1 style={{textAlign:"center", width:"95vw"}}>My Finance</h1>
            </div>      
        </Row>

        <Row>
          <div style={{textAlign: "center", alignContent:"center", alignItems:"center"}}>
            <h1>
              {/* Boa tarde Giovanni */}
            </h1>
            <h2>
              <button className="meu-botao" onClick={ removeMonth} ><FcPrevious /></button> 
                  Contas referente a {month}/{year} 
              <button className="meu-botao" onClick={addMonth} ><FcNext /></button>
            </h2>

            <Row style={{padding:20, display:"flex", flexDirection:"row", justifyContent:'center'}}>
              <button className="meu-botaoadd" onClick={openButtonRevenue}>
                Adicionar Despesa / Receita
              </button>
            </Row>

            <div  style={{textAlign: "center", justifyContent:"center", display:"flex" }}>
                <p style={{display:"flex" , flexDirection: "row", width:"30vh", alignItems:"center", border: "2px black solid", padding: "20px", borderTopLeftRadius:25, borderBottomLeftRadius:25}}> Meu saldo em conta <span style={{marginLeft:20, fontSize:25, color: "green"}}>5000</span> </p>
                <p style={{display:"flex" , flexDirection: "row", width:"30vh", alignItems:"center", border: "2px black solid", padding: "20px"}}> Contas a pagar <span style={{marginLeft:20, fontSize:25, color: "red"}}>5000</span> </p>
                <p style={{display:"flex" , flexDirection: "row", width:"30vh", alignItems:"center", border: "2px black solid", padding: "20px", borderTopRightRadius:25, borderBottomRightRadius:25}}> Contas pagas <span style={{marginLeft:20, fontSize:25, color: "blue"}}>5000</span> </p>
            </div>
          </div>
        </Row>

        <Row style={{padding:20, display:"flex", flexDirection:"row"}}>
          <AccoutIndividual accountMonthly={individualAccounts}/>
          
          <Revenue/>
        </Row>

        <Row style={{padding:20, display:"flex", flexDirection:"row", justifyContent:'center'}}>
          <button className="meu-botaoadd" onClick={openButton}>
            Adicionar Despesa
          </button>
        </Row>

        <Row> 
          <div style={{  display: "flex",justifyContent: "center",flexWrap: "wrap"}}>
            {creditCards.map((card) => (
              <CreditCard key={card.card} cardData={card} />
            ))}
          </div>
        </Row>
    </div>
  );
};

export default App;