import React, { Component } from 'react'
import { Layout, Avatar ,Row,Col,Button,Form,Input} from 'antd';

const { Header, Footer, Content } = Layout;
export class EditarPerfil extends Component {
    render() {
        return (
            <Form>
                            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="Nombre"
                        label="Nombre"
                        rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
                        >
                        <Input placeholder="Ingresa tu nombre" />
                        </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="Apellidos"
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
                    <Form.Item name="password" label="Edad" rules={[{ required: true, message: 'Ingresa una contraseña' }]}>
                    <Input style={{ width: '100%' }} placeholder="Ingresa tu Edad"/>
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
                    <Form.Item name="password" label="Contraseña 'Confirmaremos cambios'" rules={[{ required: true, message: 'Ingresa una contraseña' }]}>
                    <Input style={{ width: '100%' }} placeholder="Ingresa tu contraseña para confirmar cambios"/>
                    </Form.Item>
                </Col>
            </Row>  
            <div style={{ textAlign: 'center'}} >
                <Button onClick={this.onClose} style={{ marginRight: 8 }}>Cancelar</Button>   
                <Button onClick={this.onClose} type="primary">Registrarse</Button>
            </div> 
            </Form>            
        )
    }
}

export default EditarPerfil
