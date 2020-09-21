import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import Menu from "../menu";
import {WorkArea} from "../workArea";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotesRouter from "../router";

class Main extends React.Component {

    render() {
        return (<Container className="border">
            <Row>
                <Col lg={12} sm={12} md={12}><h3 className="text-center">Заметки</h3></Col>
            </Row>
            <Row>
                <Router>
                    <Col sm={12} lg={4} md={4}>
                        <Menu/>
                    </Col>
                    <Col sm={12} lg={8} md={8}>
                        <NotesRouter/>
                    </Col>
                </Router>
            </Row>
        </Container>)
    }
}

export default Main;