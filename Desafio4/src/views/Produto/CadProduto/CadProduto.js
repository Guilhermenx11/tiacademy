import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios";
import { api } from "../../../config";

export const CadastrarProduto = () => {

    const [produto, setCliente] = useState({
        nome: '',
        descricao: '',
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const valorProduto = e => setCliente({
        ...produto, [e.target.name]: e.target.value
    });

    const CadProduto = async e =>{
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.post(api+"/produto",produto,{headers})
        .then((response) =>{
            if (response.data.error){
                setStatus({
                    type: 'error',
                    message: response.data.message
                })
            }else{
                setStatus({
                    type: 'success',
                    message: response.data.message
                })
            }
        }).catch(()=>{
            
        })
    }

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Cadastrar novo Cliente</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-cliente"
                        className="btn btn-outline-success btn-sm">
                        Listar Serviços
                    </Link>
                </div>
            </div>
            <hr className="m-1"/>

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
            {status.type === 'success' ? <Alert color="success">{status.message}</Alert>: ""}

            <Form className="p-2" onSubmit={CadProduto}>
                <FormGroup className="p-2">
                    <Label>Nome</Label>
                    <Input type="text" name="nome" value={produto.nome} placeholder="Nome do Produto" 
                    onChange={valorProduto}/>
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Descrição</Label>
                    <Input type="text" name="descricao" value={produto.descricao}  placeholder="Descrição" 
                    onChange={valorProduto}/>
                </FormGroup>

                <Button type="submit" outline color = "success">Cadastrar</Button>
            </Form>
        </Container>
    )
}
