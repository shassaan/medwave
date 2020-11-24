import React from 'react'
import { Card, Col, Form, Row,Alert } from 'react-bootstrap';
const BookAppointment = () => {
    return (<>
        <Col xs={"10"}>
            <div class="container">
                <Card style={{ padding: "2em" }}>
                    <Card.Body>
                        <h2 className="text text-muted">Appointment type</h2>
                        <Row>
                            <Col md="4">
                               <Alert variant="success">
                               <Form.Check
                                    style={{ padding: "1em", border: "1px dotted greenyellow" }}
                                    type="radio"
                                    label={`Appointment Type 1`}

                                />
                               </Alert>

                            </Col>
                            <Col md="4">
                                <Alert variant="success">
                                <Form.Check
                                    style={{ padding: "1em", border: "1px dotted greenyellow" }}
                                    type="radio"
                                    label={`Appointment Type 2`}

                                />
                                </Alert>

                            </Col>
                            <Col md="4">
                                <Alert  variant="success" >
                                <Form.Check
                                    style={{ padding: "1em", border: "1px dotted greenyellow" }}
                                    type="radio"
                                    label={`Appointment Type 3`}

                                />
                                </Alert>

                            </Col>
                        </Row>
                        <hr/>                        <h2 className="text text-muted">Datetime</h2>
                        <Row>
                            <Col md={"12"}><Form.Control type="date" /></Col>
                        </Row>
                        <hr/>    
                        <h2 className="text text-muted">Payment details</h2>
                        <Row>
                            <Col md={"6"}>
                                <Form.Control type="text" placeholder="Card no." />
                            </Col>
                            <Col md={"4"}>
                                <Form.Control type="date" placeholder="Expiry" />
                            </Col>



                            <Col md={"2"}>
                                <Form.Control type="text" placeholder="CVV" />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col><button className="btn btn-success">Book now</button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    </>);
}

export default BookAppointment;