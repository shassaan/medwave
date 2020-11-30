import React from 'react'
import { Card, Col, Form, Row, Alert } from 'react-bootstrap';
const BookAppointment = () => {
    return (<>
            <div>
                <Card style={{ border: "none" }}>
                    <Card.Body>
                        <h2 className="text text-muted">Appointment type</h2>
                        <Row>
                            <Col md="4">
                                <Alert variant="success">
                                    <Form.Check
                                    
                                        style={{ padding: "1em", border: "1px dotted greenyellow" ,cursor:"pointer"}}
                                        type="radio"
                                        label={`Appointment Type 1`}
                                        name="appointmenttype"
                                        onClick={e => console.log("Appointment 1 selected")}
                                    />
                                </Alert>

                            </Col>
                            <Col md="4">
                                <Alert variant="success">
                                    <Form.Check
                                    className="selectable"
                                        style={{ padding: "1em", border: "1px dotted greenyellow" ,cursor:"pointer"}}
                                        type="radio"
                                        label={`Appointment Type 2`}
                                        name="appointmenttype"
                                        onClick={e => console.log("Appointment 2 selected")}
                                    />
                                </Alert>

                            </Col>
                            <Col md="4">
                                <Alert variant="success" >
                                    <Form.Check
                                    className="selectable"
                                        style={{ padding: "1em", border: "1px dotted greenyellow" ,cursor:"pointer"}}
                                        type="radio"
                                        label={`Appointment Type 3`}
                                        onClick={e => console.log("Appointment 3 selected")}
                                    name="appointmenttype"
                                    />
                                </Alert>

                            </Col>
                        </Row>
                        <hr />
                        <h2 className="text text-muted">Datetime</h2>
                        <Row>
                            <Col md={"12"}><Form.Control type="date" /></Col>
                        </Row>
                        <hr />
                        <h2 className="text text-muted">Payment details</h2>
                        <Row>
                            <Col md={"6"}>
                                <Form.Control type="text" placeholder="Card no." /> <br />
                            </Col>

                            <Col md={"4"}>
                                <Form.Control type="date" placeholder="Expiry" /> <br />
                            </Col>

                            <br />

                            <Col md={"2"}>
                                <Form.Control type="text" placeholder="CVV" /> <br /> <br />
                            </Col>
                        </Row>

                        <Row>
                            <Col><button className="btn btn-success">Book now</button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
    </>);
}

export default BookAppointment;