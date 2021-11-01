// import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
// import { Link } from "react-router-dom"
// import { useState } from "react"
// import axios from "axios";
// import { api } from "../../../config";

// export const NovoItem = () => {

//     const [itemcompra, setItemCompra] = useState({
//         CompraId: '',
//         ProdutoId: '',
//         quantidade: '',
//         valor: ''
//     });

//     const [status, setStatus] = useState({
//         type: '',
//         message: ''
//     })

//     const valorItem = e => setItemCompra({
//         ...itemcompra, [e.target.name]: e.target.value
//     });

//     const CadItem = async e =>{
//         e.preventDefault();

//         const headers = {
//             'Content-Type': 'application/json'
//         };

//         await axios.post(api+"/itemcompras",itemcompra,{headers})
//         .then((response) =>{
//             if (response.data.error){
//                 setStatus({
//                     type: 'error',
//                     message: response.data.message
//                 })
//             }else{
//                 setStatus({
//                     type: 'success',
//                     message: response.data.message
//                 })
//             }
//         }).catch(()=>{
            
//         })
//     }

//     return (
//         <Container>
//             <div className="d-flex">
//                 <div className="m-auto p-2">
//                     <h1>Cadastrar novo Item</h1>
//                 </div>
//                 <div className="p-2">
//                     <Link to="/listar-compra/"
//                         className="btn btn-outline-success btn-sm">
//                         Listar Itens
//                     </Link>
//                 </div>
//             </div>
//             <hr className="m-1"/>

//             {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
//             {status.type === 'success' ? <Alert color="success">{status.message}</Alert>: ""}

//             <Form className="p-2" onSubmit={CadItem}>
//                 <FormGroup className="p-2">
//                     <Label>CompraID</Label>
//                     <Input type="text" name="CompraId" value={compra.CompraId} placeholder="ID do Cliente" 
//                     onChange={valorItem}/>
//                 </FormGroup>

//                 <FormGroup className="p-2">
//                     <Label>ProdutoID</Label>
//                     <Input type="text" name="ProdutoID" value={compra.ProdutoId}  placeholder="ID do Produto" 
//                     onChange={valorItem}/>
//                 </FormGroup>

//                 <FormGroup className="p-2">
//                     <Label>quantidade</Label>
//                     <Input type="number" name="quantidade" value={compra.quantidade}  placeholder="Quantidade da compra" 
//                     onChange={valorItem}/>
//                 </FormGroup>

//                 <FormGroup className="p-2">
//                     <Label>valor</Label>
//                     <Input type="number" name="valor" value={compra.valor}  placeholder="Valor da Compra" 
//                     onChange={valorItem}/>
//                 </FormGroup>

//                 <Button type="submit" outline color = "success">Cadastrar</Button>
//             </Form>
//         </Container>
//     )
// }
