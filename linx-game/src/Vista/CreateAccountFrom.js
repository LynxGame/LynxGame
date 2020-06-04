import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined ,GlobalOutlined,NumberOutlined} from '@ant-design/icons';
import axios from 'axios';

const CreateAccountForm = () => {
  
  
  const [formLogin] = Form.useForm();
  const [, forceUpdate] = useState(); // To disable submit button at the beginning.
  //const {posts} = this.state;

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = values => {
    console.log('Finish:', values);
      axios.post('https://us-central1-lynx-game.cloudfunctions.net/crearCliente',values).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error)
      });
  };

  return(
    <Form form={formLogin} name="horizontal_login" layout="horizontal" onFinish={onFinish}>
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
        name={"apellidos"}
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
        name={"email"}
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
            name={"password"}
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

    <Form.Item
            name={"calle"}
            label={"Calle"}
            rules={[
              {
                required: true,
                message: 'Inserta tu edad!',
              },
            ]}
        >
              
              <Input placeholder="Calle" prefix={<NumberOutlined className="site-form-item-icon" />} />
    </Form.Item>

    <Form.Item
            name={"cp"}
            label={"CP"}
            rules={[
              {
                required: true,
                message: 'Inserta tu edad!',
              },
            ]}
        >
              
              <Input placeholder="CP" prefix={<NumberOutlined className="site-form-item-icon" />} />
    </Form.Item>

    
    <Form.Item
            name={"ciudad"}
            label={"Ciudad"}
            rules={[
              {
                required: true,
                message: 'Inserta tu edad!',
              },
            ]}
        >
              
              <Input placeholder="Ciudad" prefix={<NumberOutlined className="site-form-item-icon" />} />
    </Form.Item>

    <Form.Item
            name={"numero"}
            label={"Numero"}
            rules={[
              {
                required: true,
                message: 'Inserta tu edad!',
              },
            ]}
        >
              
              <Input placeholder="Numero" prefix={<NumberOutlined className="site-form-item-icon" />} />
    </Form.Item>

    <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !formLogin.isFieldsTouched(true) ||
              formLogin.getFieldsError().filter(({ errors }) => errors.length).length
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