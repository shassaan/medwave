import React from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import Sidebar from "../SideBar/Sidebar";

import '../App.css'
import TextComponent from "../TextComponent/TextComponent";
import Appointments from "../AppointmentsList/Appointments"

const Dash = props => {
   

    return (
        <>
         <Container fluid>
             <Row style={{background:'#1d1d1d'}}>
             
        <Col xs={2}> <img src={`${process.env.PUBLIC_URL}/Asset10_4x.png`} width="302" height="75"/></Col>
       <Col xs={8}></Col>
       <Col xs = {2}></Col>
             </Row>
               
                    <Row>
                        <Col xs={2}>
                        <Sidebar/>
                        </Col>
                        <Col xs={10}>
                        <div className="container">
                        <TextComponent/>
                        </div>
                        </Col>
                        </Row>    
                     <Row>
                         <Col><Appointments/></Col>
                     </Row>
                
                     
                    
                     
                

            </Container>
           
            
        </>
        );
  };
  const Dashboard = Dash;
  export default Dashboard