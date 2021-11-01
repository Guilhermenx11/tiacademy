import { Container } from "reactstrap";

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Service Resource</h1>
                    </div>
                </div>
                <div className="p-1">
                    <a href="/listar-cliente"
                        className="btn btn-outline-success btn-sm">
                        Cliente
                    </a>
                    <a href="/listar-servico"
                        className="btn btn-outline-success btn-sm">
                        Servico
                    </a>
                    <a href="/listar-pedido"
                        className="btn btn-outline-success btn-sm">
                        Pedido
                    </a>
                </div>
                <div className= "p-1">
                <a  href="/lista-compra"
                        className="btn btn-outline-success btn-sm">
                        Compra
                    </a>
                </div>
                <div className= "p-1">
                <a  href="/lista-produto"
                        className="btn btn-outline-success btn-sm">
                        Produto
                    </a>
                </div>
                <div className= "p-1">
                <a  href="/lista-item"
                        className="btn btn-outline-success btn-sm">
                        Item Produto
                    </a>
                </div>


            </Container>
        </div>
    );
};