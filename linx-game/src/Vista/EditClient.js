import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showClientes } from '../actions';
import { showClientesNoCredit } from '../actions';
import { Table , Button, Drawer,Divider} from 'antd';
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
    visibleEC:false,
    visibleELT:false,
    visibleELC:false
    };

    showEC = () => {
      this.setState({
      visibleEC: true,
      });
    };

    showELT = () => {
      this.setState({
      visibleELT: true,
      });
    };

    showELC = () => {
      this.setState({
      visibleELC: true,
      });
    };

    onCloseEC = () => {
        this.setState({
        visibleEC: false,
        });
    };

    onCloseELC = () => {
      this.setState({
      visibleELC: false,
      });
    };

  onCloseELT = () => {
    this.setState({
    visibleELT: false,
    });
    };

render() {
    return (
      <div>
        <h2>Editar Clientes</h2>
        <Divider type="vertical" />
        <Button  type="primary" key="Editar Cliente" onClick={this.showEC}>Actualizar Informacion del cliente</Button> 
        <Drawer
          title="Editar Cliente"
          width={720}
          onClose={this.onCloseEC}
          visible={this.state.visibleEC}
          bodyStyle={{ paddingBottom: 80 }}
        ><EditarPerfil/></Drawer>
        <Divider type="vertical" />
      <Button  type="primary" key="Eliminar Cliente" onClick={this.showELC}>Eliminar a un cliente</Button> 
        <Drawer
          title="Eliminar Perfil"
          width={720}
          onClose={this.onCloseELC}
          visible={this.state.visibleELC}
          bodyStyle={{ paddingBottom: 80 }}
        ><EliminarPerfil/></Drawer>
        <Divider type="vertical" />
      <Button  type="primary" key="Eliminar Tarjeta" onClick={this.showELT}>Eliminar una Tarjeta</Button> 
        <Drawer
          title="Eliminar Tarjeta"
          width={720}
          onClose={this.onCloseELT}
          visible={this.state.visibleELT}
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