import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showPersonal } from '../actions';
import { Table , Button, Drawer} from 'antd';
import EditarPersonal from './EditarPersonal';

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
    title: 'Telefono',
    dataIndex: 'telefono',
    width: 150,
  },
  {
    title: 'Salario',
    dataIndex: 'salario',
    width: 150,
  },
  {
    title: 'Password',
    dataIndex: 'password',
    width: 150,
  },
];

export class EditAdmins extends Component {

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

  componentDidMount() {
    this.props.showPersonal();
  }

  render() {
    return (
      <div>
        <h2>Editar Personal</h2>
        <Button  type="primary" key="Editar Cliente" onClick={this.showDrawer}>Actualizar Informacion del personal</Button> 
        <Drawer
          title="Editar Cliente"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
        ><EditarPersonal/>
      </Drawer>
       <Table columns={columns} dataSource={this.props.personales} pagination={{ pageSize: 5 }} sroll={{ x: 240 }} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    personales: state.personal.list
  }
}

export default connect(mapStateToProps, {showPersonal})(EditAdmins)