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
        <Row gutter={[24, 24]} justify="space-between">
        <Col span={2} offset={2}>
        <Card
        hoverable
        style={{ width: 1080 }}
        >
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
        <Meta title={videojuego.nombre} description={videojuego.descripcion}/>
        </Card>
        </Col>
        </Row>
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