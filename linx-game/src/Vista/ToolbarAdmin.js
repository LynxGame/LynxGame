import React, { Component } from 'react'
import { Menu, Avatar, Row, Col, Button, Drawer, Form, Input } from 'antd'
import { UserOutlined, UserAddOutlined, EditOutlined, SketchOutlined, BookOutlined, TagsOutlined, FireOutlined } from '@ant-design/icons';
import {Biblioteca} from './Biblioteca';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import CreateAccountForm from './CreateAccountFrom';

const { Search } = Input;
const { SubMenu } =  Menu;

export class Toolbar extends Component {
    state = { visible: false, sesion: false };

    state = {
        current: 'lynxPortrait',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
        current: e.key,
        });
    };

    showDrawer = () => {
        this.setState({
        visible: true,
        });
    };

    showSesion = () => {
        this.setState({
        sesion: true,
        });
    };

    onClose = () => {
        this.setState({
        visible: false,
        });
    };

    closeSesion = () => {
        this.setState({
        sesion: false,
        });
    }

    render() {
        return (
            <Row>
                <Col xs={{ span: 12, offset: 0 }} md={{ span: 14, offset: 0}} lg={{ span: 15, offset:0 }}>
                    <Menu  mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]}>
                        <Menu.Item key="lynxPortrait">
                        <Link to="/">
                        <Avatar style={{ background: '#000000'}} src='https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/101140277_151384123163874_8436367551000215552_n.png?_nc_cat=108&_nc_sid=e007fa&_nc_eui2=AeG8UH92YV3Mp7Q5yWPBxWBNO8RevmpD3b87xF6-akPdv2PMk5a57wZHjwqPVTGBtPjmUvQKSlw7v18sBf0OX7AL&_nc_oc=AQmK5NQO7KklJFoqXinWl0e0BR-uIIN95pjgBs3lTT1PQzutdYJBilncs_iCwvG2R8w&_nc_ht=scontent-qro1-1.xx&oh=02548c771c294b5ba1957470a44e7574&oe=5EF3C1AB' size={40}/>
                        </Link>
                        </Menu.Item>
                        <SubMenu icon={<TagsOutlined />} title="Comprar licencias">
                        </SubMenu>
                        <Menu.Item key="juegos" src='./src/Biblioteca.js' icon={<BookOutlined />}>
                            <Link to="/Biblioteca">
                                Editar juegos
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="editProfile" icon={<EditOutlined />}>
                            <Link to="/EditarPerfil">
                                Editar Clientes
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} md={{ span: 10, offset: 0}} lg={{ span: 9, offset:0 }}>
                    <Menu mode="horizontal" style={{ textAlign: 'right' }}>
                        <Menu.Item>
                            <Button type="primary" onClick={this.showSesion}><UserOutlined />Salir de administrador</Button>
                            <Drawer title="Inicia Sesion" width={500} onClose={this.closeSesion} visible={this.state.sesion} bodyStyle={{ paddingBottom: 80 }}>
                                <LoginForm/>
                            </Drawer>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        )
    }
}


export default Toolbar