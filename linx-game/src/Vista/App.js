import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Toolbar from './Toolbar';
import { Layout } from 'antd';
import Principal from './Principal';
import Pie from './Pie';
import {AllGames} from './AllGames.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{padding:"0rem 0rem", position: 'sticky', zIndex:1,  top: "0" }}>
        <Toolbar />
      </Header>
      <Layout>
        <Content style={{height:'auto', alignContent:'center'}}>
            <Route exact path="/" component={Principal} />
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
