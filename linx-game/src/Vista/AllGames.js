import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showVideojuegos } from '../actions';
import { Carousel,Card,  } from 'antd';
import { Typography, Space } from 'antd';

const { Text, Link } = Typography;
const { Meta } = Card;

export class AllGames extends Component {

  componentDidMount() {
    this.props.showVideojuegos();
  } 

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