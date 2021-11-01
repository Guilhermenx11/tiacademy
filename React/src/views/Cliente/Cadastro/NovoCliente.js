import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios";
import { api } from "../../../config";

export const CadastrarCliente = () => {

    const [cliente, setCliente] = useState({
        nome: '',
        endereco: '',
        cidade: '',
        uf: '',
        nascimento: '',
        clienteDesde: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const valorCliente = e => setCliente({
        ...cliente, [e.target.name]: e.target.value
    });

    const CadCliente = async e =>{
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.post(api+"/clientes",cliente,{headers})
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

            <Form className="p-2" onSubmit={CadCliente}>
                <FormGroup className="p-2">
                    <Label>Nome</Label>
                    <Input type="text" name="nome" value={cliente.nome} placeholder="Nome do Cliente" 
                    onChange={valorCliente}/>
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Endereço</Label>
                    <Input type="text" name="endereco" value={cliente.endereco}  placeholder="Endreço" 
                    onChange={valorCliente}/>
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Cidade</Label>
                    <Input type="text" name="cidade" value={cliente.cidade}  placeholder="Cidade" 
                    onChange={valorCliente}/>
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Estado</Label>
                    <Input type="text" name="uf" value={cliente.uf}  placeholder="Estado" 
                    onChange={valorCliente}/>
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Nascimento</Label>
                    <Input type="date" name="nascimento" value={cliente.nascimento} placeholder="Data de Nascimento do Cliente" 
                    onChange={valorCliente}/>
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Cliente Desde</Label>
                    <Input type="date" name="clienteDesde" value={cliente.clienteDesde} placeholder="Cliente Desde" 
                    onChange={valorCliente}/>
                </FormGroup>

                <Button type="submit" outline color = "success">Cadastrar</Button>
            </Form>
        </Container>
    )
}
