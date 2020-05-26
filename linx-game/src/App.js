import React from 'react';
import './App.css';
import Toolbar from './Toolbar';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Toolbar/>
      </Header>
      <Layout>
      <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0,}}>
        Navegacion
      </Sider>
      <Content>
        Contenido
      </Content>
      <Footer >
        Pie de Pagina
      </Footer>
      </Layout>
      
    </Layout>
  );
}

export default App;
