import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showVideojuegos } from '../actions';
import { Table } from 'antd';
import { Carousel,Card, Col, Row } from 'antd';
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
                    <img src={videojuego.Media.baner1}></img>
                 </div>
                 <div>
                 <img src={videojuego.Media.baner2}></img>
                 </div>
                 <div>
                     <img src={videojuego.Media.baner3}></img>
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