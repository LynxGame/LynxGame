import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import ToolbarAdmin from './ToolbarAdmin';
import Pie from './Pie';
import Compra from './Compra';
import EditGames from './EditGames';
import EditClient from './EditClient';
import Adminprofile from './Adminprofile';

const { Header, Footer, Content } = Layout;

export class Admin extends Component {
    render() {
        return (
            <Layout>
                <Header style={{padding:"0rem 0rem", position: 'sticky', zIndex:1,  top: "0" }}><ToolbarAdmin/></Header>
                    <Layout>
                        <Content style={{height:'auto', alignContent:'center'}}>
                            <Route path="/Compra" component={Compra} />
                            <Route path="/EditGames" component={EditGames} />
                            <Route path="/EditClient" component={EditClient}/>
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
