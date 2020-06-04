import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { Layout } from 'antd';
import Principal from './Principal';
import Pie from './Pie';
import EditarPerfil from './EditarPerfil';
import Biblioteca from './Biblioteca';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ToolbarUser from './ToolbarUser';
import AllGames from './AllGames';
import Venta from './Venta';


const { Header, Footer, Content } = Layout;

function User() {
  return (
    <Layout>
      <Header style={{padding:"0rem 0rem", position: 'sticky', zIndex:1,  top: "0" }}>
        <ToolbarUser/>
      </Header>
      <Layout>
        <Content style={{height:'auto', alignContent:'center'}}>
            <Route exact path="/" component={Principal} />
            <Route path="/EditarPerfil" component={EditarPerfil}/>
            <Route path="/Biblioteca" component={Biblioteca}/>
            <Route path="/Venta" component={Venta}/>
            <Route path="/AllGames" component={AllGames}/>
        </Content>
      </Layout>
      <Footer>
        <Pie/>
      </Footer>
    </Layout>
  );
}

export default User;
