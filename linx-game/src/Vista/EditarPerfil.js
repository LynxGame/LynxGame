import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showPersonal } from '../actions';
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
    title: 'apellido',
    dataIndex: 'apellido',
    width: 150,
  },
  {
    title: 'telefono',
    dataIndex: 'telefono',
    width: 150,
  },
  {
    title: 'salario',
    dataIndex: 'salario',
    width: 150,
  },
  {
    title: 'password',
    dataIndex: 'password',
    width: 150,
  },
  
];

export class EditarPerfil extends Component {

  componentDidMount() {
    this.props.showPersonal();
  }

  render() {
    return (
      <div>
        <h2>Editar Perfil</h2>
        <Table columns={columns} dataSource={this.props.personals} pagination={{ pageSize: 5 }} scroll={{ x: 240 }} />  
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    personals: state.personal.list
  }
}

export default connect(mapStateToProps, {showPersonal})(EditarPerfil)