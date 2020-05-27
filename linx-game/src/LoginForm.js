import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState(); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = values => {
    console.log('Finish:', values);
  };

  return (
    <Form form={form} name="horizontal_login" layout="horizontal" onFinish={onFinish}>
      <Form.Item
        name="Nombre de Usuario"
        rules={[
          {
            required: true,
            message: 'Por favor ingresa tu usuario!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nombre de Usuario" />
      </Form.Item>
      <Form.Item
        name="Contraseña"
        rules={[
          {
            required: true,
            message: 'Por favor ingresa tu contraseña!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Contraseña"
        />
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
            Iniciar Sesion
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default LoginForm