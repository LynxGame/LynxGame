import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import ToolbarAdmin from './ToolbarAdmin';
import Pie from './Pie';


const { Header, Footer, Content } = Layout;

export class Admin extends Component {
    render() {
        return (
            <Layout>
                <Header style={{padding:"0rem 0rem", position: 'sticky', zIndex:1,  top: "0" }}><ToolbarAdmin/></Header>
                    <Layout>
                        <Content style={{height:'auto', alignContent:'center'}}>
                            {/* <Route exact path="/" component={Principal} />
                            <Route path="/EditarPerfil" component={EditarPerfil} />
                            <Route path="/Biblioteca" component={Biblioteca}/>
                            <Route path="/Pay" component={Pay}/>
                            <Route path="/ViewGame" component={ViewGame}/> */}
                        </Content>
                    </Layout>
                <Footer>
                    <Pie/>
                </Footer>
            </Layout>
        )
    }
}

export default Admin
