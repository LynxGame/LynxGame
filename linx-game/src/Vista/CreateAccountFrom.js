import React, { useState, useEffect } from 'react';
import { Form, Input, Button ,Col,Row} from 'antd';
import { UserOutlined, LockOutlined ,EditOutlined,GlobalOutlined,NumberOutlined} from '@ant-design/icons';

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
        <Form.Item
            name={"nombre"}
            label={"Nombre"}
            rules={[
              {
                required: true,
                message: 'Inserta tu nombre por favor!',
              },
            ]}
        >
              
              <Input placeholder="Nombre" prefix={<UserOutlined className="site-form-item-icon" />} />
    </Form.Item>
    <Form.Item
        name={"apellido"}
        label={"Apellidos"}
        rules={[
            {
                required: true,
                message: 'Inserta tus apellidos por favor!',
            },
            ]}
        >  
        <Input placeholder="Apellidos" prefix={<UserOutlined className="site-form-item-icon" />} />
    </Form.Item>
    
    <Form.Item
        name={"correo"}
        label={"Email"}
        rules={[
            {
                required: true,
                message: 'Inserta tu email por favor!',
            },
            ]}
        >      
        <Input placeholder="Email" prefix={<GlobalOutlined className="site-form-item-icon" />} />
    </Form.Item>

    <Form.Item
        name={"username"}
        label={"Username"}
        rules={[
            {
                required: true,
                message: 'Inserta tu username por favor!',
            },
            ]}
        >  
        <Input placeholder="Username" prefix={<UserOutlined className="site-form-item-icon" />} />
    </Form.Item>

    <Form.Item
            name={"contraseña"}
            label={"Contraseña"}
            rules={[
              {
                required: true,
                message: 'Inserta una contraseña por favor!',
              },
            ]}
        >
              
              <Input placeholder="Contraseña" prefix={<LockOutlined className="site-form-item-icon" />}type="password" />
    </Form.Item>

    <Form.Item
            name={"Contraseña2"}
            label={"Confirma tu contraseña"}
            rules={[
              {
                required: true,
                message: 'Inserta una contraseña por favor!',
              },
            ]}
        >
              
        <Input placeholder="Confirmacion de contraseña" prefix={<LockOutlined className="site-form-item-icon" />}type="password" />
    </Form.Item>

    <Form.Item
            name={"edad"}
            label={"Edad"}
            rules={[
              {
                required: true,
                message: 'Inserta tu edad!',
              },
            ]}
        >
              
              <Input placeholder="Edad" prefix={<NumberOutlined className="site-form-item-icon" />} />
    </Form.Item>

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