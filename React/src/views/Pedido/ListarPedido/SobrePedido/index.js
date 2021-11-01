// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Alert, Container, Table } from "reactstrap";

// import { api } from "../../../../config";



// export const itemPedido = (props) => {

//     const [data, setData] = useState([]);

//     const [id, setId] = useState(props.match.params.id);

//     const [status, SetStatus] = useState({
//         type: '',
//         message: ''
//     });

//     const getItens = async () => {
//         await axios.get(api + "/pedidos/"+id)
//             .then((response) => {
//                 console.log(response.data.ped);
//                 setData(response.data.ped)
//             }).catch(() => {
//                 SetStatus({
//                     type: 'error',
//                     message: 'Erro de conexão com API'
//                 })
//             });
//     };

//     useEffect(() => {
//         getItens();
//     }, [id]);


//     return (
//         <div>
//             <Container>
//                 <div>
//                     <h1>Itens solicitados</h1>
//                 </div>
//                 {status.type == 'error' ? <Alert color="danger">
//                     {status.message}
//                 </Alert> : ""}
//                 <Table striped>
//                     <thead>
//                         <tr>
//                             <th>Pedido</th>
//                             <th>Data</th>
//                             <th>Valor</th>
//                             <th>Cliente ID</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map(ped => (
//                             <tr key={ped.id}>
//                                 <th>{ped.id}</th>
//                                 <td>{ped.data}</td>
//                                 <td>{ped.ClienteId}</td>
//                                 <td className="text">
//                                     <Link to={"/detalhe-pedido/"}
//                                     className="btn btn-outline-primary btn-sm">
//                                         Consultar
//                                     </Link>
//                                 </td>
//                             </tr>                            
//                         ))}
//                         <thead>
//                             <th className="text-center">
//                                 <Link to={"/listar-servico/"}
//                                 className= "btn btn-outline-info btn-m">
//                                     Voltar a todos os Serviços
//                                 </Link>
//                                 </th>
//                         </thead>
//                     </tbody>
//                 </Table>
//             </Container>
//         </div>
//     );
// };