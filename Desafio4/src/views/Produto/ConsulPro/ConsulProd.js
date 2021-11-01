import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";


export const ConsultaProd = (props) => {

   const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    const [status, SetStatus] = useState({
        type: '',
        message: ''
    });
     const getConsulProd = async () => {
        await axios.get(api + "/produto/"+id)
            .then((response) => {
                setData(response.data.prod);
            }).catch(() => {
                SetStatus({
                    type: 'error',
                    message: 'Erro de conexão com API'
                })
            });
    };
    useEffect(() => {
        getConsulProd();
    }, [id]);
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Vizualizar informações do Produto</h1>
                    </div>
                   
                    {status.type == 'error' ? <Alert color="danger">
                        {status.message}
                    </Alert> : ""}
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Compra ID</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.ProdutoId}>
                                <th>{item.CompraId}</th>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td className="text">
                                    <Link to={"/lista-produto/" +item.id}
                                        className="btn btn-outline-primary btn-sm">
                                        Consultar
                                    </Link>
                                </td>
                                <td className="text">
                                <Link to={"/deletar-produto/" +item.id}
                                    className="btn btn-outline-danger btn-m">
                                    Apagar
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
