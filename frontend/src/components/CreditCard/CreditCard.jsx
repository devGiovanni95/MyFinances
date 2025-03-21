import React from 'react';
import './CreditCard.css';

const CreditCard = ({ cardData }) => {
  return (
    <div className="credit-card">
      <h2 style={{color:'black'}}>{cardData.card}</h2>
      <p style={{color:'black'}}>Status: {cardData.status}</p>
      <h4 style={{color:'black'}}>Transações:</h4>
      <ul>
        {cardData.transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.name} {transaction.description} - R$ {transaction.amount.toFixed(2)} - {transaction.date} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreditCard;
