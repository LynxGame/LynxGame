import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;
var i=0;
const data = [
    {
      Id: '1',
      Nombre: 'Escondidas :v',
      Descripcion: 'Te escondes y que no te atrapen o te la ensartan',
      Fecha: '1958-11-15',
      Clasificacion: 'Pa todas las edades jaja',
      Licencias: 999,
      Genero: 'Antiguisimo',
      Desarrollador: 'Quiensabe',
      Precio: 'Es gratis haha',
      Media: 'imagen de niño mal escondido.jpg',
      Venta: 'nose',
      Compra: 'nosex2'
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
