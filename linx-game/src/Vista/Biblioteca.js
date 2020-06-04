import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showVenta } from '../actions';
import { Table , Button , Drawer} from 'antd';
import DEGame from './DEGame';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    width: 50,
  },
  {
    title: 'fecha',
    dataIndex: 'fecha',
    width: 150,
  },
  {
    title: 'cliente',
    dataIndex: 'cliente',
    render: cliente => `${cliente.nombre}`
  },
  {
    title: 'videojuegos',
    dataIndex: 'videojuegos',
    render: videojuegos => `${videojuegos.nombre}`
  },
];


export class Biblioteca extends Component {

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
    this.props.showVenta();
  } 

  render() {
    
    return (
      <div>
        <h2>Mis Juegos</h2>
        <Button  type="primary" key="Editar Videojuegos" onClick={this.showDrawer}>Actualizar Precio</Button> 
      <Drawer
      title="Editar Videojuegos"
      width={720}
      onClose={this.onClose}
      visible={this.state.visible}
      bodyStyle={{ paddingBottom: 80 }}
      ><DEGame/>
      </Drawer>
        <Table columns={columns} dataSource={this.props.ventas} pagination={{ pageSize: 5 }} scroll={{ y: 440 }} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ventas: state.venta.list
  }
}

export default connect(mapStateToProps, {showVenta})(Biblioteca)