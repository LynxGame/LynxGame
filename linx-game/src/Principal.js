import React, { Component } from 'react'
import {  Carousel, Row, Col , Avatar, Descriptions, List, Card, Button} from 'antd'
import {   FacebookFilled , YoutubeFilled, TwitterCircleFilled, InstagramFilled  ,GithubFilled} from '@ant-design/icons';

const data = [
    {title: 'RAINBOW SIX SIEGE',},
    {title: 'Title 2',},
    {title: 'Title 3',},
    {title: 'Title 4',},
    {title: 'Title 5',},
  ];

export class Principal extends Component {
    render() {
        return (
            <div>
                <h2>Juegos del Momento</h2>
                <Carousel autoplay style={{width:'auto',height:'auto'}}>
                <div>
                    <h3>Obviamente el rainbow</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                </Carousel>

                <h2>Top Juegos Grais</h2>
                <Carousel autoplay='true' style={{width:'auto',height:'responsive'}}>
                <div>
                    <h3><Avatar  style={{ }} size={190} src='./img/dummy.svg'/></h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                </Carousel>
            </div>
        )
    }
}

export default Principal