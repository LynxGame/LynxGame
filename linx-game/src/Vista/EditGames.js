import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showVideojuegos } from '../actions';
import { Table , Button , Drawer} from 'antd';
import DEGame from './DEGame';

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
    this.props.showVideojuegos();
  } 

  render() {
    
    return (
      <div>
        <h2>Editar Videojuegos</h2>
        <Table columns={columns} dataSource={this.props.videojuegos} pagination={{ pageSize: 5 }} scroll={{ y: 440 }} />
        <Button  type="primary" key="venta" onClick={this.showDrawer}>Actualizar Precio</Button> 
      <Drawer
      title="Venta"
      width={720}
      onClose={this.onClose}
      visible={this.state.visible}
      bodyStyle={{ paddingBottom: 80 }}
      ><DEGame/>
      </Drawer>
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