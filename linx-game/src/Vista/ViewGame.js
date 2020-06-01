import React, {Component,Fragment} from 'react';
import {  Carousel, Row, Col , Avatar} from 'antd'
import { Card } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Typography, Divider } from 'antd';
import { Layout } from 'antd';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']
const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;
var i=0;

export class ViewGame extends Component {
  
  state = {
    loading: false,
    value: 3,
    videojuego:{    
        nombre: null,
        descripcion: null,
        fecha: null,
        Media:{
            baner1: null,
            baner2: null,
            baner3: null,
            preview: null,
            trailer: null
        }
    }
}

async componentDidMount() {
    const  url="https://us-central1-lynx-game.cloudfunctions.net/getAllGames";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({videojuego: data[i], loading: false});
}

  handleChange = value => {
    this.setState({ value });
}

    render() {
      const { value } = this.state;
    return (
        <div> 
          <Carousel autoplay effect fade >
                <div> 
                    <img src={this.state.videojuego.Media.baner1}></img>
                </div>
                <div>
                <img src={this.state.videojuego.Media.baner2}></img>
                </div>
                <div>
                     <img src={this.state.videojuego.Media.baner3}></img>
                </div>
                <div>
                    <img src={this.state.videojuego.Media.baner1}></img>
                </div>
                </Carousel>
                <br></br>
                 <Col span={5} offset={2}>
                      <Card style={{ width: 1270 }}>
                        <Title>{this.state.videojuego.nombre}</Title>
                        <img src={this.state.videojuego.Media.preview}></img>
                        <Paragraph >{this.state.videojuego.descripcion}</Paragraph>
                        
                            <Link to="/ViewGame">
                            <Button  type="primary" key="ViewGame">Jugar</Button>
                            </Link>
                    
                            <Link to="/Pay">
                            <Button type="dashed" key="pay">Comprar oferton! $30USD</Button>
                            </Link>
                            <Text delete>$50USD</Text>
                            <br></br>
                            
                          <span>
                            <Rate tooltips={desc} onChange={this.handleChange} value={value} />
                            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                          </span>

                        <br></br>
                      </Card>    
                  </Col>
                <br></br><br></br>
        </div>
        );
    };
  }
export default ViewGame