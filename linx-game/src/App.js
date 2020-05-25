import React from 'react';
import './App.css';
import Toolbar from './Toolbar';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Toolbar/>
      </Header>
      <Layout>
      <Sider>
        Navegacion
      </Sider>
      <Content>
        Contenido
      </Content>
      <Footer>
        Pie de Pagina
      </Footer>
      </Layout>
      
    </Layout>
  );
}

export default App;
