import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;
var i=0;
const data = [
    {
      id: '1',
      nombre: 'Tuculo',
      apellidos: 'unapellidogracioso',
      telefono: '3570354388',
      salario: 'Nada por huevon :v',
      password: 'contraseña jaja salu2'
    }
  ];

class AdminProfile extends Component {

    state = {
        loading: false,
        videojuego:{ 
            id: null,   
            nombre: null,
            apellidos: null,
            telefono: null,
            salario: null,
            password: null
        }
    }

    async componentDidMount() {
        const  url="https://us-central1-lynx-game.cloudfunctions.net/getAllGames";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({videojuego: data[i], loading: false});
        console.log(data[i]);
    }

  render() {
    return (
      <>
        <Table dataSource={data}scroll={{ x: 1300 }} pagination={{ pageSize: 5 }}>
      <Column title="id" dataIndex="Id" key="Id" />
      <Column title="nombre" dataIndex="Nombre" key="Nombre" />
    <Column title="apellidos" dataIndex="Apellidos" key="Apellidos" />
    <Column title="telefono" dataIndex="Telefono" key="Telefono"/>
    <Column title="salario" dataIndex="Salario" key="Salario" />
    <Column title="password" dataIndex="Password" key="Password" />
  </Table>
      </>
    )}
}

export default AdminProfile
