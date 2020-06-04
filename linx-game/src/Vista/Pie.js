import React, { Component } from 'react';
import { Row, Col, Button, Avatar, Typography } from 'antd';
import { FacebookFilled , YoutubeFilled, TwitterCircleFilled, InstagramFilled  ,GithubFilled, createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({scriptUrl:  '//at.alicdn.com/t/font_1842114_fpuw4z74sx.js'});
const { Text } = Typography;

export class Pie extends Component {
    render() {
        return (
        <Row>
            <Col >
                <Avatar style={{ background: '#000000'}} size={40} src='https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/101140277_151384123163874_8436367551000215552_n.png?_nc_cat=108&_nc_sid=e007fa&_nc_eui2=AeG8UH92YV3Mp7Q5yWPBxWBNO8RevmpD3b87xF6-akPdv2PMk5a57wZHjwqPVTGBtPjmUvQKSlw7v18sBf0OX7AL&_nc_oc=AQmK5NQO7KklJFoqXinWl0e0BR-uIIN95pjgBs3lTT1PQzutdYJBilncs_iCwvG2R8w&_nc_ht=scontent-qro1-1.xx&oh=02548c771c294b5ba1957470a44e7574&oe=5EF3C1AB'/>
            </Col>
            <Col xs={{ span: 8, offset: 0 }} md={{ span: 12, offset: 1}} lg={{ span: 16, offset: 0}}>
                <Text>Lynx Game®  Todos los derechos reservados 2020</Text>
            </Col>
            <Col xs={{ span: 1, offset: 2 }} md={{ span: 1, offset: 1}} lg={{ span: 1, offset: 0 }}>
                <Button type="link" icon={<GithubFilled style={{fontSize: '40px'}}/>} href="https://github.com/LynxGame"/>
            </Col>
            <Col xs={{ span: 1, offset: 2 }} md={{ span: 1, offset: 1}} lg={{ span: 1, offset: 0 }}>
                <Button type="link" icon={<YoutubeFilled style={{fontSize: '40px'}}/>} href="https://www.youtube.com"/>
            </Col>
            <Col xs={{ span: 1, offset: 2 }} md={{ span: 1, offset: 1}} lg={{ span: 1, offset: 0 }}>
                <Button type="link" icon={<FacebookFilled style={{fontSize: '40px'}}/>} href="https://www.facebook.com/LynxxT/"/>
            </Col>
            <Col xs={{ span: 1, offset: 2 }} md={{ span: 1, offset: 1}} lg={{ span: 1, offset: 0 }}>
                <Button type="link" icon={<TwitterCircleFilled style={{fontSize: '40px'}}/>} href="https://www.twitter.com/Carlos_Cata27"/>
            </Col>
            <Col xs={{ span: 1, offset: 2 }} md={{ span: 1, offset: 1}} lg={{ span: 1, offset: 0 }}>
                <Button type="link" icon={<InstagramFilled style={{fontSize: '40px'}}/>} href="https://www.instagram.com/lynxt_e"/>
            </Col>
            <Col xs={{ span: 1, offset: 2 }} md={{ span: 1, offset: 1}} lg={{ span: 1, offset: 0 }}>
                <Button type="link" icon={<IconFont type="icon-twitch" style={{fontSize: '40px'}}/>} href="https://www.Twitch.com/CarlosKta27"/>
            </Col>
            <Col xs={{ span: 1, offset: 2 }} md={{ span: 1, offset: 1}} lg={{ span: 1, offset: 0 }}>
                <Button type="link" icon={<IconFont type="icon-discord" style={{fontSize: '40px'}}/>} href="https://discord.gg/zAPs4E"/>
            </Col>
      </Row>
        )
    }
}

export default Pie
