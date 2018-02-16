import { Container, Row, Col } from 'reactstrap';
import React from 'react';
import cs from './component.pcss';

class Footer extends React.Component {
  render() {
    return (
      <Container fluid className={cs.footer}>
        <Row>
          <Col>
            <div className={cs.socia_l}>
              <p className={cs.copy}>Copyright © 2017 Tes<span>T </span> All rights reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
