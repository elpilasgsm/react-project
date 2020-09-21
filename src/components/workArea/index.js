import React from "react";
import {Row, Col} from "react-bootstrap"
import {save, getAll} from '../../service/DataService'

export class WorkArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notes: {}}
    }

    componentDidMount() {
        this.setState({"notes": getAll()})
    }

    render() {
        let data = !this.state.notes ? <p>Ничего нет</p> : Object
            .keys(this.state.notes)
            .map((key, index) => (
                <Row key={index}>
                    <Col xs={4}>
                        <a href={"/EDIT/" + key}>{this.state.notes[key].title}</a>
                    </Col>
                    <Col xs={8}>
                        {this.state.notes[key].text}
                    </Col>
                </Row>
            ));

        return (
            <Row>
                <Col sm={12} lg={12} md={12}>
                    <Row>
                        <Col xs={4}>
                            <h5 className="text-dark">Название</h5>
                        </Col>
                        <Col xs={8}>
                            <h5 className="text-dark">Текст</h5>
                        </Col>
                    </Row>
                    {data}
                </Col>
            </Row>
        );
    }
}
