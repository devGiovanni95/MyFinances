import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');


const CadastroModalSeparateIndividual = ({ isOpen, onRequestClose, onSubmit }) => {
    const [formData, setFormData] = useState({
      name: '',
      amount: 0,
      date: '',
      monthly: false,
      description: ''
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
    
      // Verifica se todos os campos estão preenchidos
      if (
        formData.name !== '' &&
        formData.amount !== '' &&
        formData.date !== ''
      ) {
        onSubmit(formData);
        onRequestClose(); // Fecha o modal apenas se todos os campos estiverem preenchidos
      } else {
        // Exibe uma mensagem de erro ou feedback para o usuário
        alert('Por favor, preencha todos os campos.');
      }
    };
  return (
      <Modal
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fundo escurecido
          zIndex: 1000,
        },
        content: {
          width: '50%',
          margin: 'auto', // Centraliza o modal
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
      }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cadastro de Transação"
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color:'black' }}>
        Cadastro de Transação
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: '5px' }}>Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: '5px' }}>Valor:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: '5px' }}>Data:</label>
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: '5px' }}>Descrição:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              resize: 'vertical',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
          <button
            type="submit"
            style={{
              padding: '10px 15px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Cadastrar
          </button>
        </div>
      </form>
    </Modal>
    
  );
};

export default CadastroModalSeparateIndividual;