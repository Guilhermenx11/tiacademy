import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";

export const DeletarCliente = (props) => {
    const [id, setId] = useState(props.match.params.id)

    const [status, SetStatus] = useState({
        type: '',
        message: ''
    });
    const getDelCli = async () => {
        await axios.get(api + "/excluircliente/" +id)
            .then((error) => {
                SetStatus({
                    type: 'error',
                    message: 'Cliente excluido com sucesso!'
                })
            }).catch(()=>{
                SetStatus({
                    type: 'success',
                    message: 'Aconteceu algum problema'
                })
            })
            
    };
    useEffect(() => {
        getDelCli();
    }, []);
    return (
        <div>
            <Container>
                   <div>
                    {status.type == 'error' ? <Alert color="danger">
                        {status.message}
                    </Alert> : ""}
                    </div>
                <Table striped>
                    
                    <tbody>
                    <thead>
                            <th className="text">
                                <Link to={"/listar-cliente"}
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
}