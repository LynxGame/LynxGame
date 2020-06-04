import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showVideojuegos } from '../actions';
import { Carousel,Card,Drawer  } from 'antd';
import { Button } from 'antd';
import Venta from './Venta';

const { Meta } = Card;

export class AllGames extends Component {
  state={
    visible:false
    };
  componentDidMount() {
    this.props.showVideojuegos();
  } 
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
  renderUsersList() {
    return this.props.videojuegos.map((videojuego) => {
      return (


          <div className="site-card-wrapper">

                <Carousel autoplay effect fade>
                 <div> 
                    <img src={videojuego.Media.baner1} alt="Cargando..."/>
                 </div>
                 <div>
                 <img src={videojuego.Media.baner2} alt="Cargando..."/>
                 </div>
                 <div>
                     <img src={videojuego.Media.baner3} alt="Cargando..."/>
                 </div>
            </Carousel>
            <Card style={{ marginTop: 1 }}
                 type="inner"
                 title={videojuego.nombre}>
                   <Meta  title='Fecha' description={videojuego.fecha}/>
                   <br></br><Meta title='Clasificacion' description={videojuego.clasificion}/>
                   <br></br><Meta  title='Descripcion' description={videojuego.descripcion}/>
                   <br></br>
                    <Button  type="primary" key="Venta" onClick={this.showDrawer}>Comprar Videojuego</Button> 
                    <Drawer
                      title="Venta"
                      width={720}
                      onClose={this.onClose}
                      visible={this.state.visible}
                      bodyStyle={{ paddingBottom: 80 }}
                    ><Venta/>
                  </Drawer>
                   <br></br>
                </Card>
            <br></br><br></br>  

            </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderUsersList()}
      </div>
      
    )
  }
  
}

function mapStateToProps(state) {
  return {
    videojuegos: state.videojuego.list
    
  }
}

export default connect(mapStateToProps, {showVideojuegos})(AllGames)