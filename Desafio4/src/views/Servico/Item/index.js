import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const Item = (props) => {
    //console.log(props.match.params.id);

    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    const [status, SetStatus] = useState({
        type: '',
        message: ''
    });

    const getItens = async () => {
        await axios.get(api + "/servico/"+id+"/pedidos")
            .then((response) => {
                console.log(response.data.item);
                setData(response.data.item)
            }).catch(() => {
                SetStatus({
                    type: 'error',
                    message: 'Erro de conexão com API'
                })
                //console.log("Erro de conexão com API")
            });
    };

    useEffect(() => {
        getItens();
    }, [id]);


    return (
        <div>
            <Container>
                <div>
                    <h1>Itens solicitados</h1>
                </div>
                {status.type == 'error' ? <Alert color="danger">
                    {status.message}
                </Alert> : ""}
                <Table striped>
                    <thead>
                        <tr>
                            <th>Pedido</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                            <th>Vizualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.ServicoId}>
                                <th>{item.PedidoId}</th>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td className="text">
                                    <Link to={"/listar-pedidos/"}
                                    className="btn btn-outline-primary btn-sm">
                                        Consultar
                                    </Link>
                                </td>
                            </tr>                            
                        ))}
                        <thead>
                            <th className="text-center">
                                <Link to={"/listar-servico/"}
                                className= "btn btn-outline-info btn-m">
                                    Voltar a todos os Serviços
                                </Link>
                                </th>
                        </thead>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};