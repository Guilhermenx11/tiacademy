import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios";
import { api } from "../../../config";

export const NovaCompra = () => {

    const [compra, setCompra] = useState({
        data: '',
        ClienteId: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const valorCompra = e => setCompra({
        ...compra, [e.target.name]: e.target.value
    });

    const CadCompra = async e =>{
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.post(api+"/compra",compra,{headers})
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

            <Form className="p-2" onSubmit={CadCompra}>
                <FormGroup className="p-2">
                    <Label>ClienteID</Label>
                    <Input type="text" name="ClienteID" value={compra.ClienteId} placeholder="ID do Cliente" 
                    onChange={valorCompra}/>
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Data</Label>
                    <Input type="date" name="data" value={compra.data}  placeholder="Data da compra" 
                    onChange={valorCompra}/>
                </FormGroup>

                <Button type="submit" outline color = "success">Cadastrar</Button>
            </Form>
        </Container>
    )
}
