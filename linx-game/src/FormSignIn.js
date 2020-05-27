import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';

export class FormSignIn extends Component {
    render() {
        return (
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
                                    <div style={{ textAlign: 'center'}} >
                                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                            Cancelar
                                        </Button>
                                        <Button onClick={this.onClose} type="primary">
                                            Iniciar Sesion
                                        </Button>
                                    </div>
                            </Form>
        )
    }
}

export default FormSignIn
