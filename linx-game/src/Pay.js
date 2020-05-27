import React, {Component} from 'react';
import {Form,Input,Button,Radio,Select,Cascader,DatePicker,InputNumber,TreeSelect,Switch,} from 'antd';
  
export class Pay extends Component {
    render() {
    return (
      <div>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
        >
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <Form.Item label="Numero de Tarjeta">
            <Input />
          </Form.Item>
        
          <Form.Item label="BANCO">
            <TreeSelect
              treeData={[
                {
                  title: 'BBVA',
                  value: 'BBVA',
                },
                {
                    title: 'BANAMEX',
                    value: 'BANAMEX',
                },
                {
                    title: 'SANTANDER',
                    value: 'SANTANDER',
                },
                {
                    title: 'SCOTIABANK',
                    value: 'SCOTIABANK',
                },
              ]}
            />
          </Form.Item>
          
          <Form.Item label="CVV">
            <InputNumber />
          </Form.Item>
          
          <Form.Item label="Fecha">
            <DatePicker />
          </Form.Item>
          <br></br>
          <Form.Item label="->">
          <Button type="primary">Comprar!</Button>
          </Form.Item>
        </Form>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    );
  };
}
  export default Pay
