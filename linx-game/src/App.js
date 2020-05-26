import React from 'react';
import './App.css';
import Toolbar from './Toolbar';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{position: "sticky", top: "0"}}><Toolbar/></Header>
      <Layout>
        <Sider style={{background: "white", overflow: 'auto', left:0,theme: "light",position: "static"}}>Lynx Game</Sider>
        <Content>
          <div style={{  height: "calc(100vh - 55px)" }}>
            A lot of games to me c:
          </div>
      </Content>
      </Layout>
      <Footer style={{ position: "sticky", bottom: "0" }}>Todos los derechos reservados Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
