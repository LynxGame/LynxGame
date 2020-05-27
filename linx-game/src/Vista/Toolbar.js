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
                        <Menu.Item>
                            <Search style={{ verticalAlign: "middle" }} placeholder="Introduce un juego..." onSearch={value => console.log(value)} enterButton />
                        </Menu.Item>
                        <SubMenu icon={<TagsOutlined />} title="Juegos">
                            <Menu.ItemGroup title="Por Genero">
                                <Menu.Item key="setting:1">Accion-Aventura</Menu.Item>
                                <Menu.Item key="setting:2">FPS-Disparos</Menu.Item>
                                <Menu.Item key="setting:3">Plataformas</Menu.Item>
                                <Menu.Item key="setting:4">Arcade</Menu.Item>
                                <Menu.Item key="setting:5">Sanbox</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Pago">
                                <Menu.Item key="setting:6">Hot Right Now</Menu.Item>
                                <Menu.Item key="setting:7">Free to Play</Menu.Item>
                                <Menu.Item key="setting:8" icon={<FireOutlined />}>Sales</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item key="juegos" src='./src/Biblioteca.js' icon={<BookOutlined />}>
                            <Link to="/Biblioteca">
                                Mis Juegos
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="editProfile" icon={<EditOutlined />}>
                            <Link to="/EditarPerfil">
                                Editar Perfil
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} md={{ span: 10, offset: 0}} lg={{ span: 9, offset:0 }}>
                    <Menu mode="horizontal" style={{ textAlign: 'right' }}>
                        <Menu.Item key="crearCuenta">
                            <Button type="primary" onClick={this.showDrawer}><UserAddOutlined />Crear Cuenta</Button>
                            <Drawer title="Crear una nueva cuenta" width={720} onClose={this.onClose} visible={this.state.visible} bodyStyle={{ paddingBottom: 80 }} style={{ }}>
                        <CreateAccountForm/>
                    </Drawer>
                        </Menu.Item>
                        <Menu.Item>
                            <Button type="primary" onClick={this.showSesion}><UserOutlined />Iniciar Sesion</Button>
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