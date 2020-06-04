import axios from 'axios';
import React, { useState,useEffect } from 'react'
import {Button,Form,Input, InputNumber} from 'antd';


const EditarPerfil = () => {

    const [form] = Form.useForm();

    const [, forceUpdate] = useState(); // To disable submit button at the beginning.

    useEffect(() => {
      forceUpdate({});
    }, []);

    const onFinish = values => {
      console.log('Finish:', values);
      axios.post('https://us-central1-lynx-game.cloudfunctions.net/updateCliente',values).then(response => {
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
          <Form.Item label="Nombre(s)" name={['nombre']} rules={[{required: true, message: 'Ingresa tu nombre'} ]}>
              <Input />
          </Form.Item>
          <Form.Item label="Apellido(s)" name={['apellidos']} rules={[{required: true, message: 'Ingresa tus apellidos'} ]}>
            <Input />
          </Form.Item>
          <Form.Item label="Username" name={['username']} rules={[{required: true, message: 'Ingresa tu username'} ]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name={['email']} rules={[{required: true, message: 'Ingresa tu email'} ]}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name={['password']} rules={[{required: true, message: 'Ingresa tu password'} ]}>
            <Input />
          </Form.Item>
          <Form.Item label="Calle" name={['calle']} rules={[{required: true, message: 'Ingresa tu calle'} ]}>
            <Input />
          </Form.Item>
          <Form.Item label="cp" name={['cp']} rules={[{required: true, message: 'Ingresa tu cp'} ]}>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Numero" name={['numero']} rules={[{required: true, message: 'Ingresa tu numero'} ]}>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Ciudad" name={['ciudad']} rules={[{required: true, message: 'Ingresa tu ciudad'} ]}>
            <Input />
          </Form.Item>
          <Form.Item shouldUpdate onFinish={onFinish}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
            >
            Editar Perfil
          </Button>
      </Form.Item>
        </Form>

      </div>
    );
};
  export default EditarPerfil
