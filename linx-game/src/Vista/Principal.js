import React, { Component  } from 'react'
import {  Carousel, Row, Col , Avatar, Drawer} from 'antd'
import { Card  } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { showVideojuegos } from '../actions';
import { connect } from 'react-redux';
import Venta  from './Venta';

function mapStateToProps(state) {
    return {
      videojuegos: state.videojuego.list
    }
}

export class Principal extends Component {

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

    renderCarousel() {
        console.log(this.props.videojuegos)
        console.log(this.props.videojuegos.list)
        return(
            <Carousel autoplay effect fade>
                 <div> 
                    <img src='https://cutt.ly/qyKElnj' height="500" alt="Cargando..."></img>
                 </div>
                 <div>
                 <img src='https://cutt.ly/QyHZ1Ks' height="500" alt="Cargando..."></img>
                 </div>
                 <div>
                     <img src='https://cutt.ly/ryH1jSI' height="500" alt="Cargando..."></img>
                 </div>
            </Carousel>
        )
    }

    render() {  
        return (
            <>
                <div>
                {this.renderCarousel()}
                </div>
                <Row gutter={[24, 24]} justify="space-between">
                    <Col span={5} offset={2}>
                        <Card title="UNCHARTED 4" align="center" style={{ width: 270, height:500 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://cutt.ly/jyKEIdm' size={220}/>
                            <p>Uncharted 4: El desenlace del ladrón, 
                                es un videojuego de acción-aventura 
                                en tercera persona, lanzado por Sony 
                                Computer Entertainment y desarrollado por 
                                Naughty Dog</p>
                            <Button  type="primary" key="venta" onClick={this.showDrawer}>Comprar</Button> 
                            <Drawer
                            title="Venta"
                            width={720}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            bodyStyle={{ paddingBottom: 80 }}
                            ><Venta/>
                            </Drawer>
                        </Card>    
                    </Col>

                    <Col span={6} >
                        <Card title="BATTLEFIELD 3" align="center" style={{ width: 270, height:500  }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://cutt.ly/vyKELVk' size={220}/>
                            <p>Battlefield 3 Es un videojuego de 
                                disparos en primera persona desarrollado 
                                por la compañía EA Digital Illusions CE 
                                y distribuido por Electronic Arts.</p>
                            <br></br>
                            <Button  type="primary" key="venta" onClick={this.showDrawer}>Comprar</Button> 
                            <Drawer
                            title="Venta"
                            width={720}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            bodyStyle={{ paddingBottom: 80 }}
                            ><Venta/>
                            </Drawer>
                        </Card>    
                    </Col>
                    <Col span={6} >
                    <Card title="RAINBOW SIX SIEGE" align="center" style={{ width: 270, height:500  }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://cutt.ly/5yHXOHA' size={220}/>
                            <p>Tom Clancy Rainbow Six Siege 
                                es un videojuego de disparos 
                                en primera persona táctico 
                                multijugador de 5 vs 5</p>
                                <br></br><br></br>
                                <Button  type="primary" key="venta" onClick={this.showDrawer}>Comprar</Button> 
                            <Drawer
                            title="Venta"
                            width={720}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            bodyStyle={{ paddingBottom: 80 }}
                            ><Venta/>
                            </Drawer>
                        </Card>    
                    </Col>
                    <Col span={5} >
                    <Card title="Street Fighter V" align="center" style={{ width: 270, height:500 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://cutt.ly/UyKWX5l' size={220}/>
                            <p>Street Fighter V es un juego 
                                de peleas publicado por Capcom, 
                                quien co-desarrollo el juego con 
                                Dimps.</p>
                                <br></br><br></br>
                                <Button  type="primary" key="venta" onClick={this.showDrawer}>Comprar</Button> 
                            <Drawer
                            title="Venta"
                            width={720}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            bodyStyle={{ paddingBottom: 80 }}
                            ><Venta/>
                            </Drawer>
                        </Card>  
                    </Col>
                </Row>

                <h2>Top Juegos antiguos</h2>
                <Carousel autoplay effect fade>
                <div>
                <img src='https://cutt.ly/XyHLWzZ' height="500" alt="Cargando..."></img>
                </div>
                <div>
                <img src='https://cutt.ly/RyHMPfN' height="500" alt="Cargando..."></img>
                </div>
                <div>
                <img src='https://cutt.ly/zyKW0Fq' height="500" alt="Cargando..."></img>
                </div>
                </Carousel>

                <Row gutter={[24, 24]}>
                    <Col span={6} >
                        <Card title="AGE OF EMPIRES" align="center" style={{ width: 270, height:500 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://cutt.ly/cyHZwWi' size={220}/>
                            <p>Age of Empires es un videojuego de estrategia en tiempo real para computadoras personales, el primero de la serie homónima.</p>
                            <br></br><br></br>
                            <Button  type="primary" key="venta" onClick={this.showDrawer}>Comprar</Button> 
                            <Drawer
                            title="Venta"
                            width={720}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            bodyStyle={{ paddingBottom: 80 }}
                            ><Venta/>
                            </Drawer>
                        </Card>    
                    </Col>

                    <Col span={6} >
                        <Card title="BIOSHOCK" align="center" style={{ width: 270, height:500 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://cutt.ly/dyHXe5l' size={220}/>
                            <p>BioShock es un videojuego de disparos en primera persona, desarrollado por Irrational Games.</p>
                            <br></br><br></br><br></br>
                            <Button  type="primary" key="venta" onClick={this.showDrawer}>Comprar</Button> 
                            <Drawer
                            title="Venta"
                            width={720}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            bodyStyle={{ paddingBottom: 80 }}
                            ><Venta/>
                            </Drawer>
                        </Card>    
                    </Col>
                    <Col span={6} >
                    <Card title="GRAND THEFT AUTO SAN ANDREAS" align="center" style={{ width: 270, height:500 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://cutt.ly/tyHNmOZ' object-fit= "scale-down"  size={220}/>
                            <p>Grand Theft Auto: San Andreas es un videojuego de acción-aventura de mundo abierto desarrollado por Rockstar North y publicado por Rockstar Games.</p>
                            <br></br>
                            <Button  type="primary" key="venta" onClick={this.showDrawer}>Comprar</Button> 
                            <Drawer
                            title="Venta"
                            width={720}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            bodyStyle={{ paddingBottom: 80 }}
                            ><Venta/>
                            </Drawer>
                        </Card>    
                    </Col>
                    <Col span={6} >
                    <Card title="THE ELDER OF SCROLLS ARENA" align="center" style={{ width: 270, height:500 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://cutt.ly/SyKW8Rs' size={220}/>
                            <p>The Elder Scrolls: Arena es un videojuego de rol desarrollado para PCs. Es la primera entrega de la serie The Elder Scrolls.</p>
                            <br></br><br></br>
                            <Button  type="primary" key="venta" onClick={this.showDrawer}>Comprar</Button> 
                            <Drawer
                            title="Venta"
                            width={720}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            bodyStyle={{ paddingBottom: 80 }}
                            ><Venta/>
                            </Drawer>
                        </Card>  
                    </Col>
                </Row>

                <h2>Top Mas Vendidos</h2>
                <Carousel autoplay effect fade>
                <div>
                <img src='https://cutt.ly/myHZ7MO' height="500" alt="Cargando..."></img>
                </div>
                <div>
                <img src='https://cutt.ly/nyKWDUP' height="500" alt="Cargando..."></img>
                </div>
                <div>
                <img src='https://cutt.ly/FyHZ9G1' height="500" alt="Cargando..."></img>
                </div>
                </Carousel>

                <Row gutter={[24, 24]}>
                    <Col span={6} >
                        <Card title="MINECRAFT" align="center" style={{ width: 270, height:500  }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://cutt.ly/tyHZLqv' size={220}/>
                            <p>Minecraft es un videojuego de construcción, de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson</p>
                            <Button  type="primary" key="venta" onClick={this.showDrawer}>Comprar</Button> 
                            <Drawer
                            title="Venta"
                            width={720}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            bodyStyle={{ paddingBottom: 80 }}
                            ><Venta/>
                            </Drawer>
                        </Card>    
                    </Col>

                    <Col span={6} >
                        <Card title="GOD OF WAR III" align="center" style={{ width: 270, height:500  }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://cutt.ly/yyHBwBv' size={220}/>
                            <p>Gos of War III, es la quinta entrega de la serie de God of War y la secuela de God of War y God of War II.</p>
                            <br></br>
                            <Button  type="primary" key="venta" onClick={this.showDrawer}>Comprar</Button> 
                            <Drawer
                            title="Venta"
                            width={720}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            bodyStyle={{ paddingBottom: 80 }}
                            ><Venta/>
                            </Drawer>
                        </Card>    
                    </Col>
                    <Col span={6} >
                    <Card title="THE ELDER OF SCROLLS 5: SKYRIM" align="center" style={{ width: 270, height:500  }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://cutt.ly/DyKEgOv' size={220}/>
                            <p>Skyrim es un RPG del tipo mundo abierto desarrollado por Bethesda Game Studios. Es la quinta entrega de videojuegos de acción y fantasía de la serie The Elder Scrolls</p>
                            <Button  type="primary" key="venta" onClick={this.showDrawer}>Comprar</Button> 
                            <Drawer
                            title="Venta"
                            width={720}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            bodyStyle={{ paddingBottom: 80 }}
                            ><Venta/>
                            </Drawer>
                        </Card>    
                    </Col>
                    <Col span={6} >
                    <Card title="THE WITCHER 3" align="center" style={{ width: 270, height:500  }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://cutt.ly/WyKERIr' size={220}/>
                            <p>The Witcher 3: Wild Hunt es un videojuego de rol desarrollado por CD Projekt RED. CD Projekt RED es el desarrollador</p>
                            <br></br>
                            <Button  type="primary" key="venta" onClick={this.showDrawer}>Comprar</Button> 
                            <Drawer
                            title="Venta"
                            width={720}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            bodyStyle={{ paddingBottom: 80 }}
                            ><Venta/>
                            </Drawer>
                        </Card>  
                    </Col>
                </Row>
            </>
        )
    }
}

export default connect(mapStateToProps, {showVideojuegos})(Principal)
