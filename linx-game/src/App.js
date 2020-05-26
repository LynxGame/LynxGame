import React from 'react';
import './App.css';
import Toolbar from './Toolbar';
import { Layout, Carousel } from 'antd';
import Drawer from './Drawer';


const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{padding:"0 0px", position: 'sticky', zIndex:1, width: '100%', top: "0" }}><Toolbar/></Header>
      <Layout hasSider>
        <Sider style={{ overflow: 'auto', left:0,background:"#A27ACC" }}theme="light"><Drawer/></Sider>
        <Content>
          <div style={{  height: "calc(100vh - 55px)" }}>
          </div>
      </Content>
      </Layout>
      <Footer style={{ position: "sticky", bottom: "0" }}>Todos los derechos reservados Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
