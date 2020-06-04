import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showVideojuegos } from '../actions';
import { Carousel,Card,  } from 'antd';
const { Meta } = Card;


export class AllGames extends Component {

  componentDidMount() {
    this.props.showVideojuegos();
  } 

  renderUsersList() {
    return this.props.videojuegos.map((videojuego) => {
      return (


          <div className="site-card-wrapper">
                <Card style={{ marginTop: 16 }}
                 type="inner"
                 title={videojuego.nombre}>
                <Meta description={videojuego.descripcion}/>
                </Card>
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
            <br></br>

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