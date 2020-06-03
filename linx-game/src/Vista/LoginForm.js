import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined,BorderOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Popover } from 'antd';

const LoginForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState(); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  //Consumo API
  const onFinish = values => {
    console.log('Finish:', values);
    axios.post('https://us-central1-lynx-game.cloudfunctions.net/getOnePersonal',values).then(response => {
      var Personal = new Object(response.data);
      console.log(Personal)
    }).catch(error => {
      console.log(error)
    });
    axios.post('https://us-central1-lynx-game.cloudfunctions.net/getOneCliente',values).then(response => {
      var Cliente = new Object(response.data);
      console.log(Cliente)
    }).catch(error => {
      console.log(error)
    });
  };

  const popoption = (
    <div>
        <BorderOutlined />
        <Redirect to="/">
            I'm not a robot
        </Redirect>
    </div>
  );

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
      <Form.Item
        name={['id']}
        rules={[
          {
            required: true,
            message: 'Por favor ingresa tu codigo de seguridad!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="codigo de seguridad"
        />
      </Form.Item>
      <Form.Item shouldUpdate onFinish={onFinish}>
        {() => (
        <Popover
        content={onFinish}
        title="| reCAPTCHA |"
        trigger="click"
        >
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
        </Popover>
        )}
      </Form.Item>
    </Form>
  );
};

export default LoginForm