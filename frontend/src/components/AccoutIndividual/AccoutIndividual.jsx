import React from 'react';
import './AccoutIndividual.css'; // Você pode adicionar estilos aqui
import { FcApproval, FcHighPriority } from "react-icons/fc";

// const accountMonthly = [
//     { id: 1, name: 'Aluguel', dueDate: 5, status: 'Pago' },
//     { id: 2, name: 'Conta de Luz', dueDate: 10, status: 'Pendente' },
//     { id: 3, name: 'Conta de Água', dueDate: 15, status: 'Pago' },
//     { id: 4, name: 'Internet', dueDate: 20, status: 'Pendente' },
//     { id: 5, name: 'Telefone', dueDate: 25, status: 'Pago' },
//   ];
  


const AccoutIndividual = ({accountMonthly}) => {

    return(
        <div style={{width: "100vw"}}>
            <h2>Despesas Mensais</h2>
            <table width={"90vw"}>
                <thead>
                <tr>
                    <th className='red' style={{width:"30vw"}}>Nome</th>
                    <th className='red' style={{width:"30vw"}}>Valor</th>
                    <th className='red' style={{width:"30vw"}}>Status</th>
                    <th className='red' style={{width:"30vw"}}>Dia de Vencimento</th>
                </tr>
                </thead>
                <tbody>
                {/* {accountMonthly.map((account) => (
                    <tr key={account.id}>
                    <td>{account.name}</td>
                    <td>{account.dueDate}</td>
                    <td> {account.status == "Pago" ? <FcApproval /> : <FcHighPriority /> } {"-"} {account.status}</td>
                    </tr>
                ))} */}
                {Array.isArray(accountMonthly) && accountMonthly.length > 0 ? (
                    accountMonthly.map((account) => (
                        
                        <tr key={account.id}>
                            <td>{account.name}{ } { account.description}</td>
                            <td>{account.amount.toFixed(2)}</td>
                            <td>
                                {account.paid === true ? <FcApproval /> : <FcHighPriority />} -{" "}
                                {account.status}
                            </td>
                            <td>{account.date.substring(8,10)}{'/'}{account.date.substring(6,7)}{'/'}{account.date.substring(0,4)} </td>
                        </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan="3" height={20}>
                            Nenhuma despesa encontrada
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default AccoutIndividual