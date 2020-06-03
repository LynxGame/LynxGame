import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showClientes } from '../actions';
import { showClientesNoCredit } from '../actions';
import { Table } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 50,
  },
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    width: 150,
  },
  {
    title: 'Apellido',
    dataIndex: 'apellidos',
    width: 150,
  },
  {
    title: 'Username',
    dataIndex: 'username',
    width: 150,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: 150,
  },
  {
    title: 'Edad',
    dataIndex: 'edad',
    width: 150,
  },
  {
    title: 'Creditos',
    dataIndex: 'creditos',
    width: 150,
  },
  {
    title: 'Calle',
    dataIndex: 'calle',
    width: 150,
  },
  {
    title: 'CP',
    dataIndex: 'cp',
    width: 50,
  },
  {
    title: 'Numero',
    dataIndex: 'numero',
    width: 50,
  },
  {
    title: 'Ciudad',
    dataIndex: 'ciudad',
    width: 150,
  },
];

const columns2 = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 50,
  },
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    width: 150,
  },
  {
    title: 'Apellido',
    dataIndex: 'apellidos',
    width: 150,
  },
  {
    title: 'Tarjeta ID',
    dataIndex: 'Tarjeta',
    render: Tarjeta => `${Tarjeta.id}`,
  },
  {
    title: 'Numero de Tarjeta',
    dataIndex: 'Tarjeta',
    render: Tarjeta => `${Tarjeta.numero}`
  },
  {
    title: 'Banco',
    dataIndex: 'Tarjeta',
    render: Tarjeta => `${Tarjeta.banco}`
  },
  {
    title: 'Fecha de Venciento',
    dataIndex: 'Tarjeta',
    render: Tarjeta => `${Tarjeta.fecha}`
  }
];

export class EditClient extends Component {

  componentDidMount() {
    this.props.showClientes();
    this.props.showClientesNoCredit();
  }

  render() {
    return (
      <div>
        <h2>Editar Clientes</h2>
        <Table columns={columns} dataSource={this.props.clientesNoCard} pagination={{ pageSize: 5 }} sroll={{ x: 240 }} />
        <Table columns={columns2} dataSource={this.props.clientes} pagination={{ pageSize: 5 }} scroll={{ x: 240 }} />
      </div>
      
    )
  }
}

function mapStateToProps(state) {
  return {
    clientes: state.cliente.list,
    clientesNoCard: state.clienteNoCard.list
  }
}

export default connect(mapStateToProps, {showClientes, showClientesNoCredit})(EditClient)