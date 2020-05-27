import React, { Component } from 'react'
import { Layout, Avatar ,Row,Col,Button,Form,Input} from 'antd';

export class EditarPerfil extends Component {
    render() {
        return (
            <Form style={{ }}>
                <div style={{ textAlign: 'center'}}>
                    <h2>Datos Basicos</h2>
                </div>
                
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
                    <Form.Item name="Edad" label="Edad" rules={[{ required: true, message: 'Ingresa tu edad' }]}>
                            <Input style={{ width: '100%' }} placeholder="Ingresa tu edad"/>
                        </Form.Item>
                    </Col>
                </Row>

                <div style={{ textAlign: 'center'}}>
                    <h2>Datos Bancarios</h2>
                </div>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="Numero" label="Numero de tarjeta" rules={[{ required: true, message: 'Ingresa un numero de tarjeta valido' }]}>
                            <Input style={{ width: '100%' }} placeholder="Ingresa tu numero de tarjeta"/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="ccv" label="CCV" rules={[{ required: true, message: 'Ingresa un CCV valido' }]}>
                            <Input style={{ width: '100%' }} placeholder="Ingresa tu CCV"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="Fecha" label="Fecha de Caducidad" rules={[{ required: true, message: 'Ingresa una fecha de caducidad correcta' }]}>
                            <Input style={{ width: '100%' }} placeholder="Ingresa la fecha de caducidad"/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="banco" label="Nombre tu banco" rules={[{ required: true, message: 'Debes completar este campo' }]}>
                            <Input style={{ width: '100%' }} placeholder="Ingresa el nombre de tu banco"/>
                        </Form.Item>
                    </Col>
                </Row>
                <div style={{ textAlign: 'center'}}>
                    <h2>Datos Domiciliarios</h2>
                </div>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="Calle" label="Nombre de la calle" rules={[{ required: true, message: 'Ingresa una calle valida' }]}>
                            <Input style={{ width: '100%' }} placeholder="Calle, Avenida, Privada"/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="ext" label="Numero Exterior" rules={[{ required: true, message: 'Ingresa un numero ext valido' }]}>
                            <Input style={{ width: '100%' }} placeholder="EXT"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="int" label="Numero Interior" rules={[{ required: true, message: 'Ingresa un numero int valido' }]}>
                            <Input style={{ width: '100%' }} placeholder="INT"/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="cp" label="Codigo Postal" rules={[{ required: true, message: 'Debes completar este campo' }]}>
                            <Input style={{ width: '100%' }} placeholder="Codigo Postal"/>
                        </Form.Item>
                    </Col>
                </Row>

                    <div style={{ textAlign: 'center'}} >
                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            Cancelar
                        </Button>
                        <Button onClick={this.onClose} type="primary">
                            Registrarse
                        </Button>
                    </div>
            </Form>
        )
    }
}

export default EditarPerfil
