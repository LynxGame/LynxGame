import React from 'react';
import './App.css';
import Toolbar from './Toolbar';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{}}><Toolbar/></Header>
      <Layout>
        <Sider style={{background: "white", overflow: 'auto', left:0}}>Lynx Game</Sider>
        <Content>
          <div style={{  height: "calc(100vh - 55px)" }}>
            A lot of games to me c:
          </div>
      </Content>
      </Layout>
      <Footer>Todos los derechos reservados Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
