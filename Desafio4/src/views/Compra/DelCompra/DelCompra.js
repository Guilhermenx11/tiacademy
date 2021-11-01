import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";

export const DeletarCompra = (props) => {
    const [id, setId] = useState(props.match.params.id)

    const [status, SetStatus] = useState({
        type: '',
        message: ''
    });
    const getDelCom = async () => {
        await axios.get(api + "/excluicompra/" +id)
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
        getDelCom();
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
                                <Link to={"/lista-compra"}
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