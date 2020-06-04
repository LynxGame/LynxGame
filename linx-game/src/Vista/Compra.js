import React, { useState , useEffect , Component } from 'react';
import {Form, Button , Input , InputNumber} from 'antd';
import axios from 'axios';


const Compra = () => {

    const [form] = Form.useForm();

    const [, forceUpdate] = useState(); // To disable submit button at the beginning.

    useEffect(() => {
      forceUpdate({});
    }, []);

    const onFinish = values => {
      console.log('Finish:', values);
      axios.post('https://us-central1-lynx-game.cloudfunctions.net/crearCompra',values).then(response => {
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
          <Form.Item label="ID del videojuego" name={['videojuegos']} rules={[{required: true, message: 'Ingresa el ID de los videojuegos a comprar'} ]}>
              <InputNumber />
          </Form.Item>
          <Form.Item label="Numero de licencias" name={['licencia']} rules={[{required: true, message: 'Ingresa el numero de licencias a comprar'} ]}>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Fecha" name={['fecha']} rules={[{required: true, message: 'Ingresa la fecha a comprar'} ]}>
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
            Comprar Licencias
          </Button>
      </Form.Item>
        </Form>

      </div>
    );
};
  export default Compra
