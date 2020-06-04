import React, { useState , useEffect } from 'react';
import {Form, Button , Input } from 'antd';
import axios from 'axios';


const DEGame = () => {

    const [form] = Form.useForm();

    const [, forceUpdate] = useState(); // To disable submit button at the beginning.

    useEffect(() => {
      forceUpdate({});
    }, []);

    const onFinish = values => {
      console.log('Finish:', values);
      axios.post('https://us-central1-lynx-game.cloudfunctions.net/updateVideojuegosCost',values).then(response => {
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
          <Form.Item label="ID" name={['id']} rules={[{required: true, message: 'Inserta el ID del juego'} ]}>
              <Input/>
          </Form.Item>
          <Form.Item label="Precio del Videojuego" name={['idprecio']} rules={[{required: true, message: 'Ingresa el nuevo precio'} ]}>
            <Input/>
          </Form.Item>
          <Form.Item shouldUpdate onFinish={onFinish}>
          <Button
            type="primary"
            htmlType="submit"
            >
            Actualizar precio
          </Button>
      </Form.Item>
        </Form>

      </div>
    );
};
  export default DEGame
