import React, { Component } from 'react'
import { Menu } from 'antd'

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
            <Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]}>
                <Menu.Item key="lynxPortrait">
                    Lynx Game
                </Menu.Item>
                <Menu.Item key="app" disabled>
                    Lynx Game
                </Menu.Item>
            </Menu>
        )
    }
}

export default Toolbar
