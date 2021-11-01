import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";


export const ConsulItemC = (props) => {

   const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    const [status, SetStatus] = useState({
        type: '',
        message: ''
    });
     const getItemC = async () => {
        await axios.get(api + "/itempedido/info/"+id)
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
        getItemC();
    }, [id]);
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Vizualizar informações do Item Selecionado</h1>
                    </div>
                   
                    {status.type == 'error' ? <Alert color="danger">
                        {status.message}
                    </Alert> : ""}
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Compra ID</th>
                            <th>Produto ID</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.CompraId}>
                                <th>{item.ProdutoId}</th>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
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
                                <Link to={"/lista-item/"}
                                    className="btn btn-outline-info btn-m">
                                    Voltar página todos os Itens
                                </Link>
                            </th>
                        </thead>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};
