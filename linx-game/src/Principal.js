import React, { Component } from 'react'
import {  Carousel, Row, Col , Avatar} from 'antd'

export class Principal extends Component {
    render() {
        return (
            <div>
                <h2>Juegos del Momento</h2>
                <Carousel autoplay>
                <div>
                    <h3>1</h3>
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

                <Row gutter={[24, 24]}>
                    <Col span={6} ><Avatar style={{ }} size={190} src='./img/dummy.png'/></Col>
                    <Col span={6} ><Avatar style={{ }} size={190} src='./img/dummy.png'/></Col>
                    <Col span={6} ><Avatar style={{ }} size={190} src='./img/dummy.png'/></Col>
                    <Col span={6} ><Avatar style={{ }} size={190} src='./img/dummy.png'/></Col>
                </Row>

                <h2>Top Juegos Gratis</h2>
                <Carousel autoplay>
                <div>
                    <h3>1</h3>
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