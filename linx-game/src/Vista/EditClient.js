import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;
var i=0;
const data = [
    {
      Id_cliente: '1',
      Nombre: 'Eduardo',
      Apellido: 'Tuculo',
      Username: 'Eduardin_12',
      Email: 'eduardin_12@yahoo.com.mx',
      Edad: 32,
      Password: 'AngelAlberto:v',
      Creditos: 0,
      Calle: 'Tiro al Pichon',
      CP: 2020,
      Numero: 20,
      Ciudad: 'Doofania',
      banco: 'BBVA1',
      numero: 4152639874512369,
      fecha: '2020-05-29',
      cvv: 123
    }
  ];

class EditClient extends Component {

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

    async componentDidMount() {
        const  url="https://us-central1-lynx-game.cloudfunctions.net/getAllGames";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({cliente: data[i], loading: false});
        console.log(data[i]);
    }

  render() {
    return (
      <>
         <Table dataSource={data} scroll={{ x: 1300 }} pagination={{ pageSize: 5 }}>
    <Column title="Id_cliente" dataIndex="Id_cliente" key="Id_cliente" />
    <ColumnGroup title="Name">
      <Column title="Nombre" dataIndex="Nombre" key="Nombre" />
      <Column title="Apellido" dataIndex="Apellido" key="Apellido" />
    </ColumnGroup>
    <Column title="Username" dataIndex="Username" key="Username"/>
    <Column title="Email" dataIndex="Email" key="Email"/>
    <Column title="Edad" dataIndex="Edad" key="Edad" />
    <Column title="Password" dataIndex="Password" key="Password"/>
    <Column title="Creditos" dataIndex="Creditos" key="Creditos"/>
    <Column title="Calle" dataIndex="Calle" key="Calle"/>
    <Column title="CP" dataIndex="CP" key="CP"/>
    <Column title="Numero" dataIndex="Numero" key="Numero"/>
    <Column title="Ciudad" dataIndex="Ciudad" key="Ciudad"/>
    <Column title="banco" dataIndex="ID_tarjeta" key="ID_tarjeta"/>
    <Column title="numero" dataIndex="Numero" key="Numero"/>
    <Column title="fecha" dataIndex="Ciudad" key="Ciudad"/>
    <Column title="cvv" dataIndex="ID_tarjeta" key="ID_tarjeta"/>
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table >
      </>
    )
  }
}

export default EditClient
