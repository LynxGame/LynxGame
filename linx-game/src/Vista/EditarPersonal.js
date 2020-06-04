import axios from 'axios';
import React, { useState,useEffect } from 'react'
import {Button,Form,Input, InputNumber} from 'antd';


const EditarPersonal = () => {

    const [form] = Form.useForm();

    const [, forceUpdate] = useState(); // To disable submit button at the beginning.

    useEffect(() => {
      forceUpdate({});
    }, []);

    const onFinish = values => {
      console.log('Finish:', values);
      axios.post('https://us-central1-lynx-game.cloudfunctions.net/updatePersonal',values).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error)
      });
    };
  
    return (
      <div>
        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          layout="horizontal" onFinish={onFinish} form={form}
        >
          <Form.Item label="ID" name={['id']} rules={[{required: true, message: 'Ingresa tu codigo de administrador'} ]}>
              <Input />
          </Form.Item>
          <Form.Item label="Nombre" name={['nombre']} rules={[{required: true, message: 'Ingresa tu nombre'} ]}>
              <Input />
          </Form.Item>
          <Form.Item label="Apellido" name={['apellidos']} rules={[{required: true, message: 'Ingresa tus apellidos'} ]}>
            <Input />
          </Form.Item>
          <Form.Item label="Telefono" name={['telefono']} rules={[{required: true, message: 'Ingresa tu telefono'} ]}>
            <Input />
          </Form.Item>
          <Form.Item label="Salario" name={['salario']} rules={[{required: true, message: 'Ingresa tu email'} ]}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name={['password']} rules={[{required: true, message: 'Ingresa tu password'} ]}>
            <Input />
          </Form.Item>
          <Form.Item shouldUpdate onFinish={onFinish}>
          <Button
            type="primary"
            htmlType="submit"
            >
            Editar Perfil
          </Button>
      </Form.Item>
        </Form>

      </div>
    );
};
  export default EditarPersonal
