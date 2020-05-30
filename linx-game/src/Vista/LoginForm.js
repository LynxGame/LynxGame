import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import * as firebase from 'firebase';


const LoginForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState(); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = values => {
    console.log('Finish:', values);
    const login = firebase.functions().httpsCallable('getOnePersonal');
    login({values}).then(result => {
      console.log('API REST', result.data);
    })
  };

  return (
    <Form form={form} name="horizontal" layout="horizontal" onFinish={onFinish}>
      <Form.Item
        name={['username']}
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
        name={['password']}
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