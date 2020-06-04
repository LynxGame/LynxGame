import React, {Component} from 'react';
import {Form,Input,Button,Radio,Select,Cascader,DatePicker,InputNumber,TreeSelect,Switch,} from 'antd';
  
export class Compra extends Component {
    render() {
    return (
      <div>
        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          layout="horizontal"
        >
          <Form.Item label="ID del videojuego" >
              <InputNumber />
          </Form.Item>
          <Form.Item label="Numero de licencias">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Fecha">
            <DatePicker picker='month' bordered={false} />
          </Form.Item>
          <Form.Item label="">
          <Button type="primary">Comprar Licencias</Button>
          <br></br><br></br>
          Presiona ESC para salir
          </Form.Item>
        </Form>
      </div>
    );
  };
}
  export default Compra
