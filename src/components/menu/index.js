import React from "react";
import {Col, Nav, Row} from "react-bootstrap"
import './index.css'
import {Link} from "react-router-dom";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.menu = this.menus;
    }

    menus = [
        {action: "NEW", label: "Новая заметка"},
        {action: "LIST", label: "Все заметки"},
    ];

    render() {
        return (
            <Row>
                <Col sm={12} lg={12} md={12}>
                    <Nav className="flex-column" defaultActiveKey={"LIST"}>
                        {this.menu.map((val, ind) => (
                            <Nav.Item key={"B" + ind}><Nav.Link href={"/" + val.action}
                                                                eventKey={val.action}>{val.label}</Nav.Link></Nav.Item>
                        ))}
                    </Nav>
                </Col>
            </Row>
        );
    }

}


export default Menu