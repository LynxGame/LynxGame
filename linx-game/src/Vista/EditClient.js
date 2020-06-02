import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;
var i=1;

const columns = [
    {
      title: 'nombre',
      dataIndex: 'nombre',
      width: 150,
    },
    {
      title: 'apellidos',
      dataIndex: 'apellidos',
      width: 150,
    },
    {
      title: 'password',
      dataIndex: 'password',
    },
  ];
  
  const data = [];
  for (let i = 0; i < 3; i++) {
    data.push({
      id: i,
      nombre: `Edward King ${i}`,
      apellidos: 32,
      password: `London, Park Lane no. ${i}`,
    });
  }

class EditClient extends Component {
/*
    state = {
        loading: false,
        cliente:{    
            id: null,
            nombre: null,
            apellidos: null,
            username: null,
            email: null,
            edad: null,
            password: null,
            creditos: null,
            calle: null,
            cp: null,
            nmero: null,
            Tarjeta:{
                banco: null,
                numero: null,
                fecha: null,
                cvv: null
            }
        }
    }
*/
    async componentDidMount() {
        const  url="https://us-central1-lynx-game.cloudfunctions.net/getAllCliente";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({cliente: data[i], loading: false});
        console.log(data[i]);
    }

  render() {
    return (
      <>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
      </>
    )
  }
}

export default EditClient
