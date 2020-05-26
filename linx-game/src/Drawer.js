import React, { Component , } from 'react'
import {  Avatar, Button } from 'antd'
import {   FacebookFilled , YoutubeFilled, TwitterCircleFilled, InstagramFilled  ,GithubFilled} from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import { Row, Col } from 'antd';
import icono from './img/icono.svg';

const IconFont = createFromIconfontCN({scriptUrl:  '//at.alicdn.com/t/font_1842114_fpuw4z74sx.js'});

export class Drawer extends Component {
    render() {
        return (
            <div>
            <Row gutter={[24, 24]}>
                <Col>
                    <Avatar style={{ 
                        background: '#none'
                    }}src='https://raw.githubusercontent.com/LynxGame/LynxGame/master/linx-game/src/img/icono.png?token=AMFFPBXF4MY7I332GV2O4QK6ZWINM' size={190}/>
                </Col>
            </Row>
            
            <Row gutter={[24, 24]}>
            <Col span={12} key="Github">
                <Button type="link" icon={<GithubFilled style={{fontSize: '40px'}}/>} href="https://github.com/LynxGame"/>
                </Col>
            </Row>

            <Row gutter={[24, 24]}>
                <Col span={12} key="Youtube">
                    <Button type="link" icon={<YoutubeFilled style={{fontSize: '40px'}}/>} href="https://www.youtube.com"/>
                </Col>
                <Col span={12} key="Facebook">
                <Button type="link" icon={<FacebookFilled style={{fontSize: '40px'}}/>} href="https://www.facebook.com/LynxxT"/>
                </Col>
            </Row>

            <Row gutter={[24, 24]}>
                <Col span={12} key="Twitter">
                    <Button type="link" icon={<TwitterCircleFilled style={{fontSize: '40px'}}/>} href="https://www.twitter.com/CarlosCata27"/>
                </Col>
                <Col span={12} key="Instagram">
                <Button type="link" icon={<InstagramFilled style={{fontSize: '40px'}}/>} href="https://www.Instagram.com/Carlos_Cata27"/>
                </Col>
            </Row>

            <Row gutter={[24, 24]}>
                <Col span={12} key="Twitch">
                    <Button type="link" icon={<IconFont type="icon-twitch" style={{fontSize: '40px'}}/>} href="https://www.Twitch.com/CarlosKta27"/>
                </Col>
                <Col span={12} key="Discord">
                    <Button type="link" icon={<IconFont type="icon-discord" style={{fontSize: '40px'}}/>} href="https://discord.gg/zAPs4E"/>
                </Col>
            </Row>
            </div>

        )
    }
}

export default Drawer
