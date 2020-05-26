import React, { Component } from 'react'
import { Menu, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';

export class Toolbar extends Component {
    state = {
        current: 'lynxPortrait',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
        current: e.key,
        });
    };

    render() {
        return (
            <>
            <Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]}>
                <Menu.Item key="lynxPortrait">
                    Lynx Game
                </Menu.Item>
                <Menu.Item key="juegos" disabled>
                    Mis Juegos
                </Menu.Item>
                <Menu.Item key="tienda">
                    Tienda
                </Menu.Item>
                <Menu.Item key="preventas">
                    Preventas
                </Menu.Item>
            </Menu>
            <Menu>
                <Menu.Item key="Iniciar Sesion">
                    Iniciar Sesion
                </Menu.Item>
                <Avatar size="large" icon={<UserOutlined/>}/>
            </Menu>
            </>
        )
    }
}

export default Toolbar
