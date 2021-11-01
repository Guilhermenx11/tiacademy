import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";

export const ListarCliente = () => {

    const [data, setData] = useState([]);

    const [status, SetStatus] = useState({
        type: '',
        message: ''
    });
    const getClientes = async () => {
        await axios.get(api + "/listaclientes")
            .then((response) => {
                console.log(response.data.clientes);
                setData(response.data.clientes)
            }).catch(() => {
                SetStatus({
                    type: 'error',
                    message: 'Erro de conexão com API'
                })
            });
    };
    useEffect(() => {
        getClientes();
    }, []);
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Vizualizar informações do Cliente</h1>
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
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Nascimento</th>
                            <th>Cliente Desde</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.nome}</td>
                                <td>{item.endereco}</td>
                                <td>{item.cidade}</td>
                                <td>{item.uf}</td>
                                <td>{item.nascimento}</td>
                                <td>{item.clienteDesde}</td>
                                <td className="text">
                                    <Link to={"/listar-clientes/" + item.id}
                                        className="btn btn-outline-primary btn-sm">
                                        Consultar
                                    </Link>
                                </td>
                                <td className="text">
                                <Link to={"/deletar-cliente/" +item.id}
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