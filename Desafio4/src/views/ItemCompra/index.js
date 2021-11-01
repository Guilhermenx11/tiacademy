import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../config";

export const ListarItem = () => {

    const [data, setData] = useState([]);

    const [status, SetStatus] = useState({
        type: '',
        message: ''
    });
    const getItemCompra = async () => {
        await axios.get(api + "/listaitenscompras")
            .then((response) => {
                console.log(response.data.itemcompra);
                setData(response.data.itemcompra)
            }).catch(() => {
                SetStatus({
                    type: 'error',
                    message: 'Erro de conexão com API'
                })
            });
    };
    useEffect(() => {
        getItemCompra();
    }, []);
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Vizualizar informações do Item</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/cadastrarcliente"
                            className="btn btn-outline-primary btn-sm">
                            Cadastrar
                        </Link>

                    </div>
                    {status.type == 'error' ? <Alert color="danger">
                        {status.message}
                    </Alert> : ""}
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>CompraId</th>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.CompraId}>
                                <td>{item.ProdutoId}</td>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td className="text">
                                    <Link to={"/listar-itemcompra/" + item.id}
                                        className="btn btn-outline-primary btn-sm">
                                        Consultar
                                    </Link>
                                </td>
                                <td className="text">
                                <Link to={"/deletar-itemcompra/" +item.id}
                                    className="btn btn-outline-danger btn-m">
                                    Apagar
                                </Link>
                            </td>
                            </tr>
                        ))}
                        <thead>
                            <th className="text">
                                <Link to={"/"}
                                    className="btn btn-outline-info btn-m">
                                    Voltar página principal
                                </Link>
                            </th>
                        </thead>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}