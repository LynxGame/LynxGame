import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showClientes } from '../actions';
import { Table, Tag, Space } from 'antd';

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
    title: 'apellido',
    dataIndex: 'apellido',
    width: 150,
  },
  {
    title: 'username',
    dataIndex: 'username',
    width: 150,
  },
  {
    title: 'password',
    dataIndex: 'password',
    width: 150,
  },
  {
    title: 'email',
    dataIndex: 'email',
    width: 150,
  },
  {
    title: 'edad',
    dataIndex: 'edad',
    width: 150,
  },
  {
    title: 'creditos',
    dataIndex: 'creditos',
    width: 150,
  },
  {
    title: 'calle',
    dataIndex: 'calle',
    width: 150,
  },
  {
    title: 'cp',
    dataIndex: 'cp',
    width: 150,
  },
  {
    title: 'numero',
    dataIndex: 'numero',
    width: 150,
  },
  {
    title: 'ciudad',
    dataIndex: 'ciudad',
    width: 150,
  },
];

export class EditClient extends Component {

  componentDidMount() {
    this.props.showClientes();
  }

  render() {
    return (
      <div>
        <h2>Editar Clientes</h2>
        <Table columns={columns} dataSource={this.props.clientes} pagination={{ pageSize: 5 }} scroll={{ x: 240 }} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    clientes: state.cliente.list
  }
}

export default connect(mapStateToProps, {showClientes})(EditClient)