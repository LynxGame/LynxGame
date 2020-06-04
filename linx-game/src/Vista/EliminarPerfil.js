import axios from 'axios';
import React, { useState,useEffect } from 'react'
import {Button,Form,Input, InputNumber} from 'antd';


const EliminarPerfil = () => {

    const [form] = Form.useForm();

    const [, forceUpdate] = useState(); // To disable submit button at the beginning.

    useEffect(() => {
      forceUpdate({});
    }, []);

    const onFinish = values => {
      console.log('Finish:', values);
      axios.post('https://us-central1-lynx-game.cloudfunctions.net/deleteCliente',values).then(response => {
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
          <Form.Item label="ID" name={['id']} rules={[{required: true, message: 'Ingresa el id de cliente'} ]}>
              <Input />
          </Form.Item>
          <Form.Item shouldUpdate onFinish={onFinish}>
          <Button
            type="primary"
            htmlType="submit"
            >
            Eliminar Perfil
          </Button>
      </Form.Item>
        </Form>

      </div>
    );
};
  export default EliminarPerfil
