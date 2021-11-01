import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ListarPedido = () => {

    const [data, setData] = useState([]);

    const [status, SetStatus] = useState({
        type: '',
        message: ''
    });

    const getPedidos = async () => {
        await axios.get(api + "/listapedidos")
            .then((response) => {
                console.log(response.data.lista);
                setData(response.data.lista)
            }).catch(() => {
                SetStatus({
                    type: 'error',
                    message: 'Erro de conexão com API'
                })
            });
    };

    useEffect(() => {
        getPedidos();
    }, []);


    return (
        <div>
            <Container>
                <div>
                    <h1>Vizualizar informações do Serviço</h1>
                </div>
                {status.type == 'error' ? <Alert color="danger">
                    {status.message}
                </Alert> : ""}
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>Cliente ID</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.ProdutoId}>
                                <th>{item.id}</th>
                                <th>{item.data}</th>
                                <td>{item.ClienteId}</td>
                                <td className="text">
                                    <Link to={"/detalhe-pedido/"+item.id}
                                    className="btn btn-outline-primary btn-sm">
                                        Consultar
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        <thead>
                            <th className="text">
                                <Link to={"/"}
                                className= "btn btn-outline-info btn-m">
                                    Voltar página principal
                                </Link>
                                </th>
                        </thead>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};