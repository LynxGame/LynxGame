import React, { Component } from 'react'
import { Menu, Avatar, Row, Col, Button, Drawer, Form, Input, Select, DatePicker } from 'antd'
import { UserOutlined, UserAddOutlined } from '@ant-design/icons';

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
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={20}>
                    <Menu  mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]}>
                        <Menu.Item key="lynxPortrait">
                            Lynx Game
                        </Menu.Item>
                        <Menu.Item key="juegos" disabled>
                            Mis Juegos
                        </Menu.Item>
                        <Menu.Item key="tienda">
                            Tienda
                        </Menu.Item>
                        <Menu.Item key="preventas">
                            Preventas
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col span={2}>
                <Button type="primary" onClick={this.showDrawer}><UserAddOutlined />Crear Cuenta</Button>
                <Drawer title="Crear una nueva cuenta" width={720} onClose={this.onClose} visible={this.state.visible} bodyStyle={{ paddingBottom: 80 }}>
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
                            <Input style={{ width: '100%' }} placeholder="Ingresa tu correo"/>
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
                </Col>
                <Col span={2}>
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
                </Col>
            </Row>
        )
    }
}


export default Toolbar
