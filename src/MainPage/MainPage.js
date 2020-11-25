import React from 'react';
import { Col } from 'react-bootstrap';
import TextComponent from "../TextComponent/TextComponent";
import Appointments from "../AppointmentsList/Appointments"
const MainPage = (props) => {
    return (<><Col xs={10}>
        <div className="container">
            <TextComponent />
            <Appointments />
        </div>
        
    </Col>
        <Col></Col></>)
}

export default MainPage;