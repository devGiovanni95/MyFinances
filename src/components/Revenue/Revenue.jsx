import React from 'react';
import './Revenue.css'; // Você pode adicionar estilos aqui

const receitaMensais = [
    { id: 1, name: 'Pagamento', amount: 1000.00 },
    { id: 2, name: 'Vale', amount: 250.00},
 ];
  


const Revenue = (month) => {

    return(
        <div style={{marginLeft:20, width: "100vw"}}>
            <h2>Receitas Mensais</h2>
            <table>
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Valor</th>
                </tr>
                </thead>
                <tbody>
                {receitaMensais.map((revenue) => (
                    <tr key={revenue.id}>
                    <td>{revenue.name}</td>
                    <td> {revenue.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Revenue