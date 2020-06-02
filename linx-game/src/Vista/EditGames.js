import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;

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

class EditGames extends Component {
  render() {
    return (
      <>
        <Table dataSource={data}>
      <Column title="Id" dataIndex="Id" key="Id" />
      <Column title="Nombre" dataIndex="Nombre" key="Nombre" />
    <Column title="Descripcion" dataIndex="Descripcion" key="Descripcion" />
    <Column title="Fecha" dataIndex="Fecha" key="Fecha" />
    <Column title="Clasificacion" dataIndex="Clasificacion" key="Clasificacion" />
    <Column title="Licencias" dataIndex="Licencias" key="Licencias" />
    <Column title="Genero" dataIndex="Genero" key="Genero" />
    <Column title="Desarrollador" dataIndex="Desarrollador" key="Desarrollador" />
    <Column title="Precio" dataIndex="Precio" key="Precio" />
    <Column title="Media" dataIndex="Media" key="Media" />
    <Column title="Venta" dataIndex="Venta" key="Venta" />
    <Column title="Compra" dataIndex="Compra" key="Compra" />
  </Table>
      </>
    )}
}

export default EditGames
