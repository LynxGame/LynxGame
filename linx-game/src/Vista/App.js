import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Toolbar from './Toolbar';
import { Layout } from 'antd';
import Principal from './Principal';
import Pie from './Pie';
import EditarPerfil from './EditarPerfil';
import EliminarPerfil from './EliminarPerfil';
import EliminarTarjeta from './EliminarTarjeta';
import Biblioteca from './Biblioteca';
import {ViewGame} from './ViewGame.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ToolbarAdmin from './ToolbarAdmin';
import ToolbarUser from './ToolbarUser';
import EditGames from './EditGames';
import EditClient from './EditClient';
import AllGames from './AllGames';
import Venta from './Venta';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{padding:"0rem 0rem", position: 'sticky', zIndex:1,  top: "0" }}>
        <Route exact path="/" component={Toolbar} />
        <Route path="/ToolbarAdmin" component={ToolbarAdmin} />
        <Route path="/ToolbarUser" component={ToolbarUser} />
      </Header>
      <Layout>
        <Content style={{height:'auto', alignContent:'center'}}>
            <Route exact path="/" component={Principal} />
            <Route path="/EditarPerfil" component={EditarPerfil}/>
            <Route path="/EliminarPerfil" component={EliminarPerfil}/>
            <Route path="/EliminarTarjeta" component={EliminarTarjeta}/>
            <Route path="/Biblioteca" component={Biblioteca}/>
            <Route path="/Venta" component={Venta}/>
            <Route path="/ViewGame" component={ViewGame}/>
            <Route path="/EditGames" component={EditGames} />
            <Route path="/EditClient" component={EditClient}/>
            <Route path="/AllGames" component={AllGames}/>
        </Content>
      </Layout>
      <Footer>
        <Pie/>
      </Footer>
    </Layout>
  );
}

export default App;
