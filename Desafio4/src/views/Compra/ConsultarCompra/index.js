import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";


export const ConsulCompra = (props) => {

   const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    const [status, SetStatus] = useState({
        type: '',
        message: ''
    });
     const getConsulCom = async () => {
        await axios.get(api + "'/compra/"+id)
            .then((response) => {
                setData(response.data.item);
            }).catch(() => {
                SetStatus({
                    type: 'error',
                    message: 'Erro de conexão com API'
                })
            });
    };
    useEffect(() => {
        getConsulCom();
    }, [id]);
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Vizualizar informações da Compra</h1>
                    </div>
                   
                    {status.type == 'error' ? <Alert color="danger">
                        {status.message}
                    </Alert> : ""}
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Pedido ID</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.nome}</th>
                                <td>{item.descricao}</td>
                                <td className="text">
                                    <Link to={"/listar-compra/" +item.id}
                                        className="btn btn-outline-primary btn-sm">
                                        Consultar
                                    </Link>
                                </td>
                                
                            </tr>
                        ))}
                        <thead>
                            <th className="text">
                                <Link to={"/listar-cliente/"}
                                    className="btn btn-outline-info btn-m">
                                    Voltar página todos os Clientes
                                </Link>
                            </th>
                        </thead>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};
