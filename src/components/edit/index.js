import React from "react";
import {save, get, deleteRow} from '../../service/DataService'
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import _uniqueId from 'lodash/uniqueId';

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.noteId = props.noteId;
        this.state = {};
        this.handler = this.handler.bind(this);
        this.save = this.save.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
    }

    componentDidMount() {
        let data = {};
        if (this.noteId)
            data = get(this.noteId);
        else {
            data.text = "";
            data.title = "";
        }
        this.setState({title: data.title, text: data.text, id: data.id});
    }

    handler(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    save(event) {
        save(this.state);
        window.location.href = "/LIST";
    }

    deleteRow(event) {
        if (this.state.id) {
            deleteRow(this.state.id);
            window.location.href = "/LIST";
        }
    }

    render() {
        let deleteButton = this.state.id ?
            <Button variant="danger" size={"sm"} onClick={this.deleteRow}>Удалить</Button> :
            <></>;
        if (this.state) {
            return <Row>
                <Col sx={12}>
                    <h5>{"Редактирование заметки: " + this.state.title}</h5>
                </Col>
                <Col sm={12}>
                    <Form>
                        <Form.Group>
                            <Form.Label>Название</Form.Label>
                            <Form.Control name="title" type="text" placeholder="Название" value={this.state.title}
                                          onChange={this.handler}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Текст</Form.Label>
                            <Form.Control name="text" as="textArea" onChange={this.handler}
                                          placeholder="Текст">{this.state.text}</Form.Control>
                        </Form.Group>
                    </Form>
                    <>
                        <Button variant="primary" size={"sm"} onClick={this.save}>Сохранить</Button>
                        {deleteButton}
                    </>
                </Col>
            </Row>;
        } else {
            return <p>Loading...</p>
        }
    }
}

export default Edit