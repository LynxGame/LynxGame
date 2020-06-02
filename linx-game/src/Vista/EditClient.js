import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;

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
      ID_tarjeta: 1
    }
  ];

class EditClient extends Component {
  render() {
    return (
      <>
         <Table dataSource={data}>
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
    <Column title="ID_tarjeta" dataIndex="ID_tarjeta" key="ID_tarjeta"/>
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
  </Table>
      </>
    )
  }
}

export default EditClient
