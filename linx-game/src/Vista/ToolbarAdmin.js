import React, { Component } from 'react'
import { Menu, Avatar, Row, Col, Button, Input } from 'antd'
import { CloseCircleTwoTone,UserOutlined, EditOutlined, BookOutlined, TagsOutlined } from '@ant-design/icons';
import {Biblioteca} from './Biblioteca';
import { Link } from 'react-router-dom';
import { Popover } from 'antd';

const popoption = (
    <div>
        <CloseCircleTwoTone twoToneColor="#52c41a"/>
        <Link to="/">
            Aceptar
        </Link>
        <p></p>
        <CloseCircleTwoTone twoToneColor="#FF0000"/>
        <Link to="">
            Cancelar 
        </Link>
    </div>
  );
export class Toolbar extends Component {
    state = { visible: false, sesion: false };

    state = {
        current: 'lynxPortrait',
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

    showSesion = () => {
        this.setState({
        sesion: true,
        });
    };

    onClose = () => {
        this.setState({
        visible: false,
        });
    };

    closeSesion = () => {
        this.setState({
        sesion: false,
        });
    }
    hide = () => {
        this.setState({
          visible: false,
        });
      };
    
      handleVisibleChange = visible => {
        this.setState({ visible });
      };
      

    render() {
        return (
            <Row>
                <Col xs={{ span: 12, offset: 0 }} md={{ span: 14, offset: 0}} lg={{ span: 15, offset:0 }}>
                    <Menu  mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]}>
                        <Menu.Item key="lynxPortrait">
                        <Link to="/">
                        <Avatar style={{ background: '#000000'}} src='https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/101140277_151384123163874_8436367551000215552_n.png?_nc_cat=108&_nc_sid=e007fa&_nc_eui2=AeG8UH92YV3Mp7Q5yWPBxWBNO8RevmpD3b87xF6-akPdv2PMk5a57wZHjwqPVTGBtPjmUvQKSlw7v18sBf0OX7AL&_nc_oc=AQmK5NQO7KklJFoqXinWl0e0BR-uIIN95pjgBs3lTT1PQzutdYJBilncs_iCwvG2R8w&_nc_ht=scontent-qro1-1.xx&oh=02548c771c294b5ba1957470a44e7574&oe=5EF3C1AB' size={40}/>
                        </Link>
                        //Aqui va nombre
                        </Menu.Item>
                        <Menu.Item key="Compra" icon={<TagsOutlined />}>
                            <Link to="/Compra">
                                Comprar Licencias
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="juegos"  icon={<BookOutlined />}>
                            <Link to="/EditGames">
                                Editar juegos
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="editProfile" icon={<EditOutlined />}>
                            <Link to="/EditClient">
                                Editar Clientes
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col xs={{ span: 12, offset: 0 }} md={{ span: 10, offset: 0}} lg={{ span: 9, offset:0 }}>
                    <Menu mode="horizontal" style={{ textAlign: 'right' }}>
                        
                        <Menu.Item>
                        
                        <Popover
                                content={popoption}
                                title="¿Seguro que quieres salir de tu perfil?"
                                trigger="click"
                                visible={this.state.visible}
                                onVisibleChange={this.handleVisibleChange}
                                >
                            <Button type="primary" ><UserOutlined />Salir de administrador</Button>
                        </Popover>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        )
    }
}


export default Toolbar