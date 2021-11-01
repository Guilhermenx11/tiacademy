import './App.css';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import {Home} from './views/Home'
import { ListarCliente } from './views/Cliente/Listar';
import {ListarPedido} from './views/Pedido/ListarPedido';
import {ListarServico} from './views/Servico/ListarServico';
import {Menu} from './Components/Menu';
import {Item} from './views/Servico/Item';
import { Cadastrar } from './views/Servico/Cadastrar';
import { CadCliente } from './views/Cliente/ListaCliente/ConsultaCliente';
import {CadastrarCliente} from'./views/Cliente/Cadastro/NovoCliente';
import { ListaCompra } from './views/Compra';
import { DeletarCliente } from './views/Cliente/Apagar/DelCliente';
import { ConsulCompra } from './views/Compra/ConsultarCompra';
import { NovaCompra } from './views/Compra/NovaCompra/NexCompra';
import { DeletarCompra } from './views/Compra/DelCompra/DelCompra';
import { ListarProdutos } from './views/Produto';
import { ConsultaProd } from './views/Produto/ConsulPro/ConsulProd';
import { CadastrarProduto } from './views/Produto/CadProduto/CadProduto';
import { DeletarProduto } from './views/Produto/DelProduto/DelProduto';
import { ListarItem } from './views/ItemCompra';
import { DeletarItemCompra } from './views/ItemCompra/DelItem';
import { ConsulItemC } from './views/ItemCompra/ConsulItens/ConsulItem';



function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path= "/" component={Home}/>
          <Route  path= "/listar-cliente" component={ListarCliente}/>
          <Route  path= "/listar-clientes/:id" component= {CadCliente}/>
          <Route  path="/deletar-cliente/:id" component={DeletarCliente}/>
          <Route  path= "/listar-pedido" component={ListarPedido}/>
          <Route  path= "/listar-servico" component={ListarServico}/>
          <Route  path= "/listar-pedidos/:id" component={Item}/>
          <Route  path= "/cadastrarservico" component={Cadastrar}/>
          <Route  path="/cadastrarcliente" component={CadastrarCliente}/>
          <Route  path="/lista-compra" component={ListaCompra}/>
          <Route  path="/listar-compra/:id" component={ConsulCompra}/>
          <Route  path="/cadastrarcompra" component={NovaCompra}/>
          <Route  path="/deletar-compra/" component={DeletarCompra}/>
          <Route  path="/lista-produto" component={ListarProdutos}/>
          <Route  path="/listar-produtos/:id" component={ConsultaProd}/>
          <Route  path="/cadastrarproduto/" component={CadastrarProduto}/>
          <Route  path="/deletar-produto/" component={DeletarProduto}/>
          <Route  path="/lista-item" component={ListarItem}/>
          <Route  path="/deletar-itemcompra/" component={DeletarItemCompra}/>
          <Route  path="/listar-itemcompra/:id" component={ConsulItemC}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
