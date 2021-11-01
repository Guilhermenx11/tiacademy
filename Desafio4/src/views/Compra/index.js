import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../config";

export const ListaCompra = () => {

    const [data, setData] = useState([]);

    const [status, SetStatus] = useState({
        type: '',
        message: ''
    });
    const getCompras = async () => {
        await axios.get(api + "/listacompras")
            .then((response) => {
                console.log(response.data.compra);
                setData(response.data.compra)
            }).catch(() => {
                SetStatus({
                    type: 'error',
                    message: 'Erro de conexão com API'
                })
            });
    };
    useEffect(() => {
        getCompras();
    }, []);
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Vizualizar informações do Compra</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/cadastrarcompra"
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
                            <th>ID</th>
                            <th>Data</th>
                            <th>ClienteID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.data}</td>
                                <td>{item.ClienteId}</td>
                                <td className="text">
                                    <Link to={"/listar-compras/" + item.id}
                                        className="btn btn-outline-primary btn-sm">
                                        Consultar
                                    </Link>
                                </td>
                                <td className="text">
                                <Link to={"/deletar-compra/" +item.id}
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