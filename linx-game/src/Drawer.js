import React, { Component } from 'react'
import { Menu, Avatar } from 'antd'
import {   FacebookFilled , YoutubeFilled, TwitterCircleFilled, InstagramFilled  ,GithubFilled} from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({scriptUrl:  '//at.alicdn.com/t/font_1842114_fpuw4z74sx.js'});

export class Drawer extends Component {
    render() {
        return (
            <Menu mode="vertical" style={{background:"#A27ACC",}}>
                <Menu.Item style={{fontSize:'100px',}}>
                    <Avatar size={64} src='./imagenes/dummy.png'/>
                </Menu.Item>
                <Menu.Item key="Youtube" icon={<YoutubeFilled style={{fontSize: '40px'}}/>} >
                    <a href="https://www.youtube.com"/>
                </Menu.Item>
                <Menu.Item key="Facebook" icon={<FacebookFilled style={{fontSize: '40px'}}/>}>
                    <a href="https://www.facebook.com/CarlosCata27"/>
                </Menu.Item>
                <Menu.Item key="Twitter" icon={<TwitterCircleFilled style={{fontSize: '40px',}}/>}>
                    <a href="https://www.twitter.com/CarlosCata27"/>
                </Menu.Item>
                <Menu.Item key="Instagram" icon={<InstagramFilled style={{fontSize: '40px'}}/>}>
                <a href="https://www.Instagram.com/Carlos_Cata27"/>
                </Menu.Item>
                <Menu.Item key="Twitch" icon={<IconFont type="icon-twitch" style={{fontSize: '40px'}}/>}>
                <a href="https://www.Twitch.com/CarlosKta27"/>
                </Menu.Item>
                <Menu.Item key="Discord" icon={<IconFont type="icon-discord" style={{fontSize: '40px'}}/>}>
                <a href="https://discord.gg/zAPs4E"/>
                </Menu.Item>
                <Menu.Item key="Github" icon={<GithubFilled style={{fontSize: '40px'}}/>}>
                <a href="https://github.com/LynxGame"/>
                </Menu.Item>
            </Menu>
        )
    }
}

export default Drawer
