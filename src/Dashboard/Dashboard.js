import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import Sidebar from "../SideBar/Sidebar";

import '../App.css'
import TopNavBar from "../NavBar/TopNavbar";


const Dash = props => {


    return (
        <>
            
                {/* <Row style={{ background: '#1d1d1d' }}>

                    <Col xs={2}> <img src={`${process.env.PUBLIC_URL}/Asset10_4x.png`} width="302" height="75" /></Col>
                    <Col xs={8}></Col>
                    <Col xs={2}></Col>
                </Row> */}

<TopNavBar/>

                
                    {props.children}
                







          


        </>
    );
};
const Dashboard = Dash;
export default Dashboard