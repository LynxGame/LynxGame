import React, { Component , } from 'react'
import {  Avatar, Button } from 'antd'
import {   FacebookFilled , YoutubeFilled, TwitterCircleFilled, InstagramFilled  ,GithubFilled} from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import { Row, Col } from 'antd';

const IconFont = createFromIconfontCN({scriptUrl:  '//at.alicdn.com/t/font_1842114_fpuw4z74sx.js'});

export class Drawer extends Component {
    render() {
        return (
            <div>
            <Row gutter={[24, 24]}>
                <Col>
                    <Avatar style={{ 
                        background: '#000000'
                    }} src='https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/101140277_151384123163874_8436367551000215552_n.png?_nc_cat=108&_nc_sid=e007fa&_nc_eui2=AeG8UH92YV3Mp7Q5yWPBxWBNO8RevmpD3b87xF6-akPdv2PMk5a57wZHjwqPVTGBtPjmUvQKSlw7v18sBf0OX7AL&_nc_oc=AQmK5NQO7KklJFoqXinWl0e0BR-uIIN95pjgBs3lTT1PQzutdYJBilncs_iCwvG2R8w&_nc_ht=scontent-qro1-1.xx&oh=02548c771c294b5ba1957470a44e7574&oe=5EF3C1AB' size={190}/>

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
                <Button type="link" icon={<FacebookFilled style={{fontSize: '40px'}}/>} href="https://www.facebook.com/CarlosCata27"/>
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
