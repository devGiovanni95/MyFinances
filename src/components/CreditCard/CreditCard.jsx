// // src/components/CreditCardDropdown/CreditCardDropdown.jsx

// import React, { useState } from 'react';
// import { Dropdown } from 'react-bootstrap';
// import './CreditCard.css';

// const CreditCardDropdown = ({ creditCards }) => {
//   const [selectedCard, setSelectedCard] = useState(creditCards[0]); // Predefine o primeiro cartão como selecionado

//   const handleSelect = (card) => {
//     setSelectedCard(card);
//   };

//   return (
//     <div className="credit-card-dropdown">
//       <h2>{selectedCard.card}</h2>
//       <p>Status: {selectedCard.status}</p>
//       <Dropdown onSelect={handleSelect}>
//         <Dropdown.Toggle variant="success" id="dropdown-basic">
//           {selectedCard.card}
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//           {creditCards.map((card) => (
//             <Dropdown.Item key={card.card} eventKey={card} active={card.card === selectedCard.card}>
//               {card.card}
//             </Dropdown.Item>
//           ))}
//         </Dropdown.Menu>
//       </Dropdown>
//       <div className="account-info">
//         <h4>Transações:</h4>
//         <ul>
//           {selectedCard.transactions.map((transaction, index) => (
//             <li key={index}>
//               {transaction.name} - ${transaction.amount} - {transaction.date} ({transaction.description})
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CreditCardDropdown;
// src/components/CreditCard/CreditCard.jsx

import React from 'react';
import './CreditCard.css';

const CreditCard = ({ cardData }) => {
  return (
    <div className="credit-card">
      <h2>{cardData.card}</h2>
      <p>Status: {cardData.status}</p>
      <h4>Transações:</h4>
      <ul>
        {cardData.transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.name} - ${transaction.amount} - {transaction.date} ({transaction.description})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreditCard;
