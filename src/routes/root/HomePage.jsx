import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Container, Col, Row } from 'reactstrap';
import io from 'socket.io-client';
import cs from './HomePage.pcss';


class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      userNameID: '',
      userName: '',
      items: [],
      modal: true,
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      users: [],

    };
    window.io = io;

    this.socket = io('http://localhost:4000');
    this.socket.on('chat message', (data) => {
      this.setState({ items: [...this.state.items, data] });
      if (data.userNameID !== '') {
        this.setState({ users: [...this.state.users, data] });
      }
    });
  }
  toggle() {
    if (this.state.userName !== '') {
      this.setState({ modal: !this.state.modal });
    }
  }
  send(e) {
    e.preventDefault();
    this.setState({ type: '' });
    if (this.state.value !== '') {
      this.socket.emit('chat message', {
        name: this.state.value,
        id: Date.now(),
        userName: this.state.userName,
        userNameID: this.state.userNameID,
        time: this.state.time,
      });
    }
    this.setState({ value: '', userNameID: '' });
  }
  keydown(e) {
    if (event.keyCode === 13) {
      this.send();
    }
    e.preventDefault();
  }
  handleChange(e) {
    if (this.state.value !== '') this.setState({ type: `${this.state.userName} is Typing . . .  ` });
    else this.setState({ type: '' });
    this.setState({ value: e.target.value });
  }
  render() {
    const listing = this.state.items.map((item) =>
      (<li
        className={cs.li}
        key={item.id}
      >
        {item.name}
        <span className={cs.time}>{item.time}</span>
        <span className={cs.userName}>
          {item.userName}
        </span>
      </li>),
    );
    const name = this.state.users.map((item) =>
      (<div
        className={cs.contactsP}
        key={item.id}
      >
        {item.userNameID}
      </div>),
    );
    return (
      <div>
        <Container>
          <Row>
            <Col md="3" xs="12"className={cs.right}>
              <div className={cs.contacts} >
                Contacts
              </div>
              {name}
            </Col>
            <Col md="9" xs="12" className={cs.left}>
              <div className={cs.contactsRoom} >
                Chat Room
              </div>
              <ul className={cs.messages}>
                {listing}
              </ul>
              <div className={cs.type}> {this.state.type} </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Col>
            <form>
              <div className={cs.form}>
                <input
                  placeholder="your message"
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                />
                <button
                  onClick={this.send.bind(this)}
                  onKeyDown={this.keydown.bind(this)}
                >S e n d</button>
              </div>
            </form>
          </Col>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} >
          <ModalHeader className={cs.header}>Wellcome chat room</ModalHeader>
          <ModalBody>
            <input
              className={cs.userNameInput}
              placeholder="Please enter your name"
              value={this.state.userName}
              onChange={ev =>
                this.setState({ userName: ev.target.value, userNameID: ev.target.value })}
            />
            <Button className={cs.btnRoom} onClick={this.toggle.bind(this)}>Go to Chat room</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default HomePage;
