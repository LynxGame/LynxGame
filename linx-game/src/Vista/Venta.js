import React, { useState , useEffect } from 'react';
import {Form, Button , Input } from 'antd';
import axios from 'axios';


const Venta = () => {

    const [form] = Form.useForm();

    const [, forceUpdate] = useState(); // To disable submit button at the beginning.

    useEffect(() => {
      forceUpdate({});
    }, []);

    const onFinish = values => {
      console.log('Finish:', values);
      axios.post('https://us-central1-lynx-game.cloudfunctions.net/crearVenta',values).then(response => {
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
          <Form.Item label="Fecha" name={['fecha']} rules={[{required: true, message: 'Inserta la fecha de hoy'} ]}>
              <Input/>
          </Form.Item>
          <Form.Item label="Videojuego" name={['videojuegos']} rules={[{required: true, message: 'Ingresa el nombre del videojuego'} ]}>
            <Input/>
          </Form.Item>
          <Form.Item label="Inserta tu numero de cliente" name={['cliente']} rules={[{required: true, message: 'Ingresa tu numero ID'} ]}>
            <Input />
          </Form.Item>
          <Form.Item shouldUpdate onFinish={onFinish}>
          <Button
            type="primary"
            htmlType="submit"
            >
            Comprar Juego
          </Button>
      </Form.Item>
        </Form>

      </div>
    );
};
  export default Venta
