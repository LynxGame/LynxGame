import React, { Component } from 'react'
import { Menu, Avatar, Row, Col, Button, Drawer, Form, Input, Select, DatePicker } from 'antd'
import { UserOutlined, UserAddOutlined } from '@ant-design/icons';
import {Biblioteca} from './Biblioteca';
import { Link } from 'react-router-dom';

const { Option } = Select;

export class Toolbar extends Component {
    state = {
        current: 'lynxPortrait',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
        current: e.key,
        });
    };

    state = { visible: false, sesion: false };

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
                <Col xs={{ span: 5, offset: 2 }} md={{ span: 10, offset: 1}} lg={{ span: 15, offset:0 }}>
                    <Menu  mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]}>
                        <Menu.Item key="lynxPortrait">
                        <Link to="/">
                        <Avatar style={{ background: '#000000'}} src='https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/101140277_151384123163874_8436367551000215552_n.png?_nc_cat=108&_nc_sid=e007fa&_nc_eui2=AeG8UH92YV3Mp7Q5yWPBxWBNO8RevmpD3b87xF6-akPdv2PMk5a57wZHjwqPVTGBtPjmUvQKSlw7v18sBf0OX7AL&_nc_oc=AQmK5NQO7KklJFoqXinWl0e0BR-uIIN95pjgBs3lTT1PQzutdYJBilncs_iCwvG2R8w&_nc_ht=scontent-qro1-1.xx&oh=02548c771c294b5ba1957470a44e7574&oe=5EF3C1AB' size={40}/>
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="juegos" src='./src/Biblioteca.js' type='link' onClick>
                            <Link to="/Biblioteca">
                            Mis Juegos
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="preventas">
                            Preventas
                        </Menu.Item>
                        <Menu.Item key="editProfile">
                            <Link to="/EditarPerfil">
                                Editar Perfil
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col xs={{ span: 5, offset: 2 }} md={{ span: 10, offset: 1}} lg={{ span: 9, offset:0 }}>
                    <Menu mode="horizontal" style={{ textAlign: 'right' }}>
                        <Menu.Item key="crearCuenta">
                            <Button type="primary" onClick={this.showDrawer}><UserAddOutlined />Crear Cuenta</Button>
                            <Drawer title="Crear una nueva cuenta" width={720} onClose={this.onClose} visible={this.state.visible} bodyStyle={{ paddingBottom: 80 }} style={{ }}>
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                            name="nombre"
                            label="Nombre"
                            rules={[{ required: true, message: 'Por favor ingresa un nombre' }]}
                            >
                            <Input placeholder="Ingresa tu nombre" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                            name="apellidos"
                            label="Apellidos"
                            rules={[{ required: true, message: 'Ingresa tus apellidos' }]}
                            >
                            <Input style={{ width: '100%' }} placeholder="Aqui van tus apellidos" />
                            </Form.Item>
                        </Col>
                        </Row>
                        <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item name="correo" label="Correo" rules={[{ required: true, message: 'Por favor, necesitamos tu correo' }]}>
                            <Input style={{ width: '100%' }} placeholder="Ingresa tu correo"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="password" label="Contraseña" rules={[{ required: true, message: 'Ingresa una contraseña' }]}>
                            <Input style={{ width: '100%' }} placeholder="Ingresa tu contraseña"/>
                            </Form.Item>
                        </Col>
                        </Row>
                        <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Danos un nombre de usuario' }]}>
                            <Input style={{ width: '100%' }} placeholder="Vamos... se original"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="password2" label="Ingresa tu Contraseña de nuevo" rules={[{ required: true, message: 'debes completar este campo' }]}>
                            <Input style={{ width: '100%' }} placeholder="Ingresa de nuevo tu contraseña"/>
                            </Form.Item>
                        </Col>
                        </Row>
                    </Form>
                    <div style={{ textAlign: 'center'}} >
                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            Cancelar
                        </Button>
                        <Button onClick={this.onClose} type="primary">
                            Registrarse
                        </Button>
                    </div>
                    </Drawer>
                        </Menu.Item>
                        <Menu.Item>
                            <Button type="primary" onClick={this.showSesion}><UserOutlined />Iniciar Sesion</Button>
                            <Drawer title="Inicia Sesion" width={720} onClose={this.closeSesion} visible={this.state.sesion} bodyStyle={{ paddingBottom: 80 }}>
                            <Form layout="vertical" hideRequiredMark>
                                    <Form.Item
                                    name="username-sesion"
                                    label="Nombre de Usuario"
                                    rules={[{ required: true, message: 'Por favor ingresa tu nombre de usuario' }]}
                                    >
                                    <Input placeholder="Tu nombre de usuario va aqui..." />
                                    </Form.Item>
                                    <Form.Item
                                    name="password-sesion"
                                    label="Constraseña"
                                    rules={[{ required: true, message: 'Por favor ingresa una contraseña' }]}
                                    >
                                    <Input placeholder="Ingresa tu Constraseña" />
                                    </Form.Item>
                            </Form>
                            <div style={{ textAlign: 'center'}} >
                                <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                    Cancelar
                                </Button>
                                <Button onClick={this.onClose} type="primary">
                                    Iniciar Sesion
                                </Button>
                            </div>
                            </Drawer>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        )
    }
}


export default Toolbar
