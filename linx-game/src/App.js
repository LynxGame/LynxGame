import React from 'react';
import './App.css';
import Toolbar from './Toolbar';
import { Layout } from 'antd';
import Principal from './Principal';
import Pie from './Pie';


const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{padding:"0rem 0rem", position: 'sticky', zIndex:1,  top: "0" }}><Toolbar/></Header>
      <Layout>
        <Content>
            <Principal/>
        </Content>
      </Layout>
      <Footer style={{ position: "sticky" }}>
        <Pie/>
      </Footer>
    </Layout>
  );
}

export default App;
