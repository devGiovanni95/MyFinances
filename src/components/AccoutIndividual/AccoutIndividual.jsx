import React from 'react';
import './AccoutIndividual.css'; // Você pode adicionar estilos aqui
import { FcApproval, FcHighPriority } from "react-icons/fc";

const accountMonthly = [
    { id: 1, name: 'Aluguel', dueDate: 5, status: 'Pago' },
    { id: 2, name: 'Conta de Luz', dueDate: 10, status: 'Pendente' },
    { id: 3, name: 'Conta de Água', dueDate: 15, status: 'Pago' },
    { id: 4, name: 'Internet', dueDate: 20, status: 'Pendente' },
    { id: 5, name: 'Telefone', dueDate: 25, status: 'Pago' },
  ];
  


const AccoutIndividual = (mes) => {

    return(
        <div style={{width: "100vw"}}>
            <h2>Despesas Mensais</h2>
            <table width={"90vw"}>
                <thead>
                <tr>
                    <th className='red' style={{width:"30vw"}}>Nome</th>
                    <th className='red' style={{width:"30vw"}}>Dia de Vencimento</th>
                    <th className='red' style={{width:"30vw"}}>Status</th>
                </tr>
                </thead>
                <tbody>
                {accountMonthly.map((account) => (
                    <tr key={account.id}>
                    <td>{account.name}</td>
                    <td>{account.dueDate}</td>
                    <td> {account.status == "Pago" ? <FcApproval /> : <FcHighPriority /> } {"-"} {account.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default AccoutIndividual