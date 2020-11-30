import React from 'react';
import { Col } from 'react-bootstrap';
import TextComponent from "../TextComponent/TextComponent";
import Appointments from "../AppointmentsList/Appointments"
const MainPage = (props) => {
    return (<>
        <div>
            <TextComponent />
            <Appointments />
        </div>
        
        <Col></Col></>)
}

export default MainPage;