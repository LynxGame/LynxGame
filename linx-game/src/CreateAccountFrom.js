import React, { useState, useEffect } from 'react';
import { Form, Input, Button ,Col,Row} from 'antd';
import { UserOutlined, LockOutlined ,EditOutlined,GlobalOutlined} from '@ant-design/icons';

const CreateAccountForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState(); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = values => {
    console.log('Finish:', values);
  };

  return(

    <Form form={form} name="horizontal_login" layout="horizontal" onFinish={onFinish}>
    <Row gutter={16}>
        <Col span={12}>
                <Form.Item
                    name="Nombre"
                    rules={[
                    {
                        required: true,
                        message: 'Por favor ingresa tu nombre!',
                    },
                    ]}
                >
                    Nombre:
                <Input prefix={<EditOutlined className="site-form-item-icon" />} placeholder="Nombre" />
            </Form.Item>
        </Col>
        <Col span={12}>
            <Form.Item
                name="Apellidos"
                rules={[
                {
                    required: true,
                    message: 'Por favor ingresa tus apellidos!',
                },
            ]}
            >
                Apellidos:
                <Input
                    prefix={<EditOutlined className="site-form-item-icon" />}
                    type="apellidos"
                    placeholder="Apellidos"
                />
            </Form.Item>
        </Col>
    </Row>
    
    <Row gutter={16}>
        <Col span={12}>
                <Form.Item
                    name="Correo"
                    rules={[
                    {
                        required: true,
                        message: 'Por favor ingresa tu correo!',
                    },
                    ]}
                >
                    Correo Electronico:
                <Input prefix={<GlobalOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
        </Col>
        <Col span={12}>
            <Form.Item
                name="Contraseña"
                rules={[
                {
                    required: true,
                    message: 'Por favor ingresa tu contraseña!',
                },
            ]}
            >
                Contraseña:
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="contraseña"
                    placeholder="Contraseña"
                />
            </Form.Item>
        </Col>
    </Row>

    <Row gutter={16}>
        <Col span={12}>
                <Form.Item
                    name="Username"
                    rules={[
                    {
                        required: true,
                        message: 'Por favor ingresa tu usuario!',
                    },
                    ]}
                >
                    Username:
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
        </Col>
        <Col span={12}>
            <Form.Item
                name="Contraseña2"
                rules={[
                {
                    required: true,
                    message: 'Por favor ingresa tu contraseña de nuevo!',
                },
            ]}
            >
                Confirmar Contraseña:
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="contraseña2"
                    placeholder="Confirmacion de contraseña"
                />
            </Form.Item>
        </Col>
    </Row>

    <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Crear Nueva Cuenta
          </Button>
        )}
      </Form.Item>
    </Form>
  );

};

export default CreateAccountForm