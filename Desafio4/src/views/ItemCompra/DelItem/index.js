import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";

export const DeletarItemCompra = (props) => {
    const [id, setId] = useState(props.match.params.id)

    const [status, SetStatus] = useState({
        type: '',
        message: ''
    });
    const getDelItemC = async () => {
        await axios.get(api + "/excluiritemcompra/" +id)
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
        getDelItemC();
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
                                <Link to={"/lista-item"}
                                    className="btn btn-outline-info btn-m">
                                    Voltar página todos as Compras
                                </Link>
                            </th>
                        </thead>
                        
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}