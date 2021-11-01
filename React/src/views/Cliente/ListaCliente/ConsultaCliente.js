import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";


export const CadCliente = (props) => {

   const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    const [status, SetStatus] = useState({
        type: '',
        message: ''
    });
     const getCadCli = async () => {
        await axios.get(api + "/clientesi/"+id)
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
        getCadCli();
    }, [id]);
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Vizualizar informações do Cliente</h1>
                    </div>
                   
                    {status.type == 'error' ? <Alert color="danger">
                        {status.message}
                    </Alert> : ""}
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Pedido ID</th>
                            <th>Data</th>
                            <th>Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.data}</td>
                                <td className="text">
                                    <Link to={"/listar-clientes/" +item.id}
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
