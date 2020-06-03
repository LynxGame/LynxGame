import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showVideojuegos } from '../actions';
import { Table } from 'antd';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    width: 50,
  },
  {
    title: 'nombre',
    dataIndex: 'nombre',
    width: 150,
  },
  {
    title: 'descripcion',
    dataIndex: 'descripcion',
    width: 150,
  },
  {
    title: 'fecha',
    dataIndex: 'fecha',
    width: 150,
  },
  {
    title: 'clasificion',
    dataIndex: 'clasificion',
    width: 150,
  },
  {
    title: 'licencias_disp',
    dataIndex: 'licencias_disp',
    width: 150,
  },

];

export class EditGames extends Component {

  componentDidMount() {
    this.props.showVideojuegos();
  }

  render() {
    return (
      <div>
        <h2>Editar Videojuegos</h2>
        <Table columns={columns} dataSource={this.props.videojuegos} pagination={{ pageSize: 5 }} scroll={{ x: 240 }} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    videojuegos: state.videojuego.list
  }
}

export default connect(mapStateToProps, {showVideojuegos})(EditGames)