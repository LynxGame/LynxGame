import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showClientes } from '../actions';
import { showClientesNoCredit } from '../actions';
import { Table , Button, Drawer} from 'antd';
import EditarPerfil from './EditarPerfil';
import EliminarPerfil from './EliminarPerfil';
import EliminarTarjeta from './EliminarTarjeta';

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

  state={
    visible:false
};

handleClick = e => {
    console.log('click ', e);
    this.setState({
    current: e.key,
    });
};

showDrawer = () => {
    this.setState({
    visible: true,
    });
};

onClose = () => {
    this.setState({
    visible: false,
    });
};

  render() {
    return (
      <div>
        <h2>Editar Clientes</h2>
        <Button  type="primary" key="Editar Cliente" onClick={this.showDrawer}>Actualizar Informacion del cliente</Button> 
        <Drawer
          title="Editar Cliente"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
        ><EditarPerfil/>
      </Drawer>
      <Button  type="primary" key="Eliminar Cliente" onClick={this.showDrawer}>Eliminar a un cliente</Button> 
        <Drawer
          title="Eliminar Perfil"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
        ><EliminarPerfil/>
      </Drawer>
      <Button  type="primary" key="Eliminar Tarjeta" onClick={this.showDrawer}>Eliminar una Tarjeta</Button> 
        <Drawer
          title="Eliminar Tarjeta"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
        ><EliminarTarjeta/>
      </Drawer>
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