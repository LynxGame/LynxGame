import React, {Component,Fragment} from 'react';
import {Row,Col,Button} from 'antd';


export class ViewGame extends Component {
    render() {
    return (
        <div>
          <Row gutter={16}>

            <h1>Nombre del juego</h1>

          </Row>
          <Row gutter={16}>
            
          <h1>Aqui va el carrusel juas juas</h1>

          </Row>

          <Row gutter={16}>

            <Col span={12}>
              <h1>Descripcion del game</h1>
            </Col>

            <Col span={12}>
            <Row gutter={16}>
              <h1>Precio</h1>
            </Row>
            <Row gutter={16}>
            <Button
            type="primary"
            htmlType="submit"
            >
            Jugar
          </Button>
            </Row>
            
            </Col>

          </Row>

          <Row gutter={16}>

            <Row gutter={16}>
              <Col span={12}>
                <h1>Genero</h1>
              </Col>
              <Col span={12}>
              <h1>Desarrollador</h1>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
              <h1>Fecha de lanzamiento</h1>
              </Col>
              <Col span={12}>
              <h1>Edad</h1>
              </Col>
            </Row>
          </Row>

        </div>
        );
    };
  }
export default ViewGame