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
        
          <Form.Item label="Banco">
            <TreeSelect
              treeData={[
                {
                  title: 'BBVA',
                  value: 'BBVA',
                },
                {
                  title: 'HSBC',
                  value: 'HSBC',
                },
                {
                    title: 'Banamex',
                    value: 'Banamex',
                },
                {
                    title: 'Santander',
                    value: 'Santander',
                },
                {
                    title: 'Scotiabank',
                    value: 'Scotiabank',
                },
              ]}
            />
          </Form.Item>
          
          <Form.Item label="CVV">
            <InputNumber />
          </Form.Item>
          
          <Form.Item label="Fecha">
            <DatePicker picker='month' bordered={false} />
          </Form.Item>

          <br></br>
          <Form.Item label="Presiona el siguiente boton">
          <Button type="primary">Comprar!</Button>
          </Form.Item>
        </Form>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    );
  };
}
  export default Pay
