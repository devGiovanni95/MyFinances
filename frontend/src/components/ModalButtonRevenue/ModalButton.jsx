import Modal from 'react-modal';
import { Row} from 'react-bootstrap';

const ModalButtonRevenue = ({ isOpen, onRequestClose, openModalRevenue, openModalIndidual, openModalIndividualRecurrent}) => {

  return (
      <Modal
      style={{
        overlay: {
          backgroundColor: 'rgba(5, 5, 5, 0.6)', // Fundo escurecido
          zIndex: 1000,
        },
        content: {
          width: '50%',
          height: '35%',
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
        <Row style={{}} >
          <div style={{textAlign: "center", display:"flex", flexDirection:'column'}}>
            <h1>Tipo de despesa / receita</h1> 
            <button className="meu-botaoadd" onClick={openModalRevenue}>
              Adicionar Receita
            </button>
            <button className="meu-botaoadd" onClick={openModalIndidual}>
              Adicionar Despesa
            </button>
            <button className="meu-botaoadd" onClick={openModalIndividualRecurrent}>
              Adicionar Despesa Recorrente
            </button>
          </div>

        </Row>  

    </Modal>
    
  );
};

  export default ModalButtonRevenue