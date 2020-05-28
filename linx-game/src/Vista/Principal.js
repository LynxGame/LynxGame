import React, { Component } from 'react'
import {  Carousel, Row, Col , Avatar} from 'antd'
import { Space, Card } from 'antd';
import { Button } from 'antd';
import {Pay} from './Pay.js';
import { Link } from 'react-router-dom';
import {ViewGame} from './ViewGame.js';

export class Principal extends Component {
    render() {
        return (
            <>
                <div style={{ textAlign: 'center'}} >
                    <h2>Juegos del Momento</h2>
                    <Carousel autoplay effect fade>
                <div>
                    <img src='https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg'></img>
                </div>
                <div>
                    <img src='https://generacionxbox.com/wp-content/uploads/2016/11/rainbow-six-siege-expansiones-generacion-xbox-940x529.jpg.webp'></img>
                </div>
                <div>
                    <img src='https://areajugones.sport.es/wp-content/uploads/2019/07/borderlands-3-normal-hero-01-ps4-us-02apr19.jpg.webp'></img>
                </div>
                <div>
                   <img src='https://media.vandal.net/i/1200x630/4-2020/2020471014495_1.jpg'></img>
                </div>
                </Carousel>
                </div>
                <Row gutter={[24, 24]} justify="space-between">
                    <Col span={5} offset={2}>
                        <Card title="BORDERLANDS 3" style={{ width: 270 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://i.blogs.es/a8e05e/bor1/1366_2000.jpg' size={220}/>
                            <p>Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego</p>
                            
                            <Link to="/ViewGame">
                            <Button type="primary" key="ViewGame">View</Button>
                            </Link>

                            <Link to="/Pay">
                            <Button type="dashed" key="pay">Buy $70USD</Button>
                            </Link>

                        
                        </Card>    
                    </Col>

                    <Col span={6} >
                        <Card title="CALL OF DUTY WARZONE" style={{ width: 270 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://store-images.s-microsoft.com/image/apps.46452.13835473807186336.9510cd97-f71a-49b0-9e5c-0877f4bc9de3.611f3905-926e-456a-b549-6b68564b2769' size={220}/>
                            <p>Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego</p>

                            <Button type="primary">View</Button>
                            <Button type="dashed">Buy $70USD</Button>
                        </Card>    
                    </Col>
                    <Col span={6} >
                    <Card title="RAINBOWSIX SIEGE" style={{ width: 270 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/es_ES/dw66734897/images/large/56c494ad88a7e300458b4d5a.jpg?sw=341&sh=450&sm=fit' size={220}/>
                            <p>Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego</p>

                            <Button type="primary">View</Button>
                            <Button type="dashed">Buy $70USD</Button>
                        </Card>    
                    </Col>
                    <Col span={5} >
                    <Card title="MAINCRA" style={{ width: 270 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://lh3.googleusercontent.com/yAtZnNL-9Eb5VYSsCaOC7KAsOVIJcY8mpKa0MoF-0HCL6b0OrFcBizURHywpuip-D6Y' size={220}/>
                            <p>Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego</p>

                            <Button type="primary">View</Button>
                            <Button type="dashed">Buy $70USD</Button>
                        </Card>  
                    </Col>
                </Row>

                <h2>Top Ahi dice Gratis</h2>
                <Carousel autoplay effect fade>
                <div>
                    <img src='https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg'></img>
                </div>
                <div>
                    <img src='https://generacionxbox.com/wp-content/uploads/2016/11/rainbow-six-siege-expansiones-generacion-xbox-940x529.jpg.webp'></img>
                </div>
                <div>
                    <img src='https://areajugones.sport.es/wp-content/uploads/2019/07/borderlands-3-normal-hero-01-ps4-us-02apr19.jpg.webp'></img>
                </div>
                <div>
                   <img src='https://media.vandal.net/i/1200x630/4-2020/2020471014495_1.jpg'></img>
                </div>
                </Carousel>

                <Row gutter={[24, 24]}>
                    <Col span={6} >
                        <Card title="BORDERLANDS 3" style={{ width: 270 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://i.blogs.es/a8e05e/bor1/1366_2000.jpg' size={220}/>
                            <p>Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego</p>
                            
                            <Button type="primary">View</Button>
                            <Button type="dashed">Buy $70USD</Button>
                        </Card>    
                    </Col>

                    <Col span={6} >
                        <Card title="CALL OF DUTY WARZONE" style={{ width: 270 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://store-images.s-microsoft.com/image/apps.46452.13835473807186336.9510cd97-f71a-49b0-9e5c-0877f4bc9de3.611f3905-926e-456a-b549-6b68564b2769' size={220}/>
                            <p>Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego</p>

                            <Button type="primary">View</Button>
                            <Button type="dashed">Buy $70USD</Button>
                        </Card>    
                    </Col>
                    <Col span={6} >
                    <Card title="RAINBOWSIX SIEGE" style={{ width: 270 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/es_ES/dw66734897/images/large/56c494ad88a7e300458b4d5a.jpg?sw=341&sh=450&sm=fit' size={220}/>
                            <p>Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego</p>

                            <Button type="primary">View</Button>
                            <Button type="dashed">Buy $70USD</Button>
                        </Card>    
                    </Col>
                    <Col span={6} >
                    <Card title="MAINCRA" style={{ width: 270 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://lh3.googleusercontent.com/yAtZnNL-9Eb5VYSsCaOC7KAsOVIJcY8mpKa0MoF-0HCL6b0OrFcBizURHywpuip-D6Y' size={220}/>
                            <p>Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego</p>

                            <Button type="primary">View</Button>
                            <Button type="dashed">Buy $70USD</Button>
                        </Card>  
                    </Col>
                </Row>

                <h2>Top Mas Vendidos</h2>
                <Carousel autoplay effect fade>
                <div>
                    <img src='https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg'></img>
                </div>
                <div>
                    <img src='https://generacionxbox.com/wp-content/uploads/2016/11/rainbow-six-siege-expansiones-generacion-xbox-940x529.jpg.webp'></img>
                </div>
                <div>
                    <img src='https://areajugones.sport.es/wp-content/uploads/2019/07/borderlands-3-normal-hero-01-ps4-us-02apr19.jpg.webp'></img>
                </div>
                <div>
                   <img src='https://media.vandal.net/i/1200x630/4-2020/2020471014495_1.jpg'></img>
                </div>
                </Carousel>

                <Row gutter={[24, 24]}>
                    <Col span={6} >
                        <Card title="BORDERLANDS 3" style={{ width: 270 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://i.blogs.es/a8e05e/bor1/1366_2000.jpg' size={220}/>
                            <p>Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego</p>
                            
                            <Button type="primary">View</Button>
                            <Button type="dashed">Buy $70USD</Button>
                        </Card>    
                    </Col>

                    <Col span={6} >
                        <Card title="CALL OF DUTY WARZONE" style={{ width: 270 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://store-images.s-microsoft.com/image/apps.46452.13835473807186336.9510cd97-f71a-49b0-9e5c-0877f4bc9de3.611f3905-926e-456a-b549-6b68564b2769' size={220}/>
                            <p>Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego</p>

                            <Button type="primary">View</Button>
                            <Button type="dashed">Buy $70USD</Button>
                        </Card>    
                    </Col>
                    <Col span={6} >
                    <Card title="RAINBOWSIX SIEGE" style={{ width: 270 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/es_ES/dw66734897/images/large/56c494ad88a7e300458b4d5a.jpg?sw=341&sh=450&sm=fit' size={220}/>
                            <p>Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego</p>

                            <Button type="primary">View</Button>
                            <Button type="dashed">Buy $70USD</Button>
                        </Card>    
                    </Col>
                    <Col span={6} >
                    <Card title="MAINCRA" style={{ width: 270 }}>
                        <Avatar shape='square' style={{ 
                        background: 'none'
                        }} src='https://lh3.googleusercontent.com/yAtZnNL-9Eb5VYSsCaOC7KAsOVIJcY8mpKa0MoF-0HCL6b0OrFcBizURHywpuip-D6Y' size={220}/>
                            <p>Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego
                            Descripcion mamalona del videojuego</p>

                            <Button type="primary">View</Button>
                            <Button type="dashed">Buy $70USD</Button>
                        </Card>  
                    </Col>
                </Row>
            </>
        )
    }
}

export default Principal