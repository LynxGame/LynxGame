import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd';
import axios from 'axios';

const { Column, ColumnGroup } = Table;
var videojuegos=null;
var cod=null,med=null,ban=null,med2=null,med3=null,cod2;


const columns = [
    {
      title: 'id',
      dataIndex: 'dem',
      width: 150,
    },
    {
      title: 'nombre',
      dataIndex: 'cod2',
      width: 150,
    },
  ];

  let dem = [];
const promises = [];

for (let i = 0; i < 5; i++) {  
  promises .push(
    
axios.get('https://us-central1-lynx-game.cloudfunctions.net/getAllGames').then(response => {
    //console.log(response)
    videojuegos = response.data;
    console.log(videojuegos)

    cod = videojuegos[i].id;
    console.log(cod)  

    cod2 = videojuegos[i].nombre;
    console.log(cod2)  
    
    dem.push(cod2);

}).catch(error => {
    console.log(error)
  })
  
  )
}

Promise.all(promises).then(() => console.log(dem));

  const data = [];
  for (let i = 1; i < 3; i++) {
    data.push({
      id: `${dem}`,
      nombre: `${cod2}`,
    });
  }


class EditGames extends Component {
  render() {
    return (
      <>
      <Table columns={columns} dataSource={dem} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
      </>
    )}
}

export default EditGames
