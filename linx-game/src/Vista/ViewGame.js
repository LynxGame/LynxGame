import React, {Component,Fragment} from 'react';
import {Row,Col,Button} from 'antd';


export class ViewGame extends Component {
    render() {
    return (
        <div>
          <Row>
            
          Aqui va el carrusel juas juas

          </Row>

          <Row>

            <Col>
              Descripcion del game
            </Col>

            <Col>
            <Button
            type="primary"
            htmlType="submit"
          >
            Jugar
          </Button>
            </Col>

          </Row>

        </div>
        );
    };
  }
export default ViewGame