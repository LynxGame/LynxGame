import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Toolbar from './Toolbar';
import { Layout } from 'antd';
import Principal from './Principal';
import Pie from './Pie';
import EditarPerfil from './EditarPerfil';
import Biblioteca from './Biblioteca';
import Pay from './Pay';
import {ViewGame} from './ViewGame.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
 import {Carousel} from 'react-responsive-carousel'
 import ToolbarAdmin from './ToolbarAdmin';

const { Header, Footer, Content } = Layout;


function App() {
  return (
    <Layout>
      <Header style={{padding:"0rem 0rem", position: 'sticky', zIndex:1,  top: "0" }}><Toolbar/></Header>
      <Layout>
        <Content style={{height:'auto', alignContent:'center'}}>
            <Route exact path="/" component={Principal} />
            <Route path="/EditarPerfil" component={EditarPerfil} />
            <Route path="/Biblioteca" component={Biblioteca}/>
            <Route path="/Pay" component={Pay}/>
            <Route path="/ViewGame" component={ViewGame}/>
        </Content>
      </Layout>
      <Footer>
        <Pie/>
      </Footer>
    </Layout>
  );
}

export default App;
