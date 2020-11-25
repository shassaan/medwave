import React, { useState } from 'react';
import { FaInfo} from 'react-icons/fa';
import {Table,Alert,Modal,Button} from 'react-bootstrap';
import AppointmentDetail from '../AppointmentDetail/AppointmentDetail';
const Appointments = ()=>{
    const [show,setShow] = useState(false);
    return (<>
    <Alert variant="success" style={{textAlign:"center"}}>Appointment History and upcoming</Alert>
    <div className="table-responsive">
    <Table table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Datetime</th>
      <th>Doctor</th>
      <th>Plan</th>
      <th>Status</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>30-Nov-2020 5:00 PM</td>
      <td>DOCTOR</td>
      <td>Cannabis_Recommendation</td>
      <td><span className="badge badge-danger">missed</span></td>
      <td><a href="#" onClick={()=>setShow(true)} className="text text-info"><FaInfo style={{color:"mediumseagreen"}}/></a></td>
    </tr>
    <tr>
      <td>1</td>
      <td>30-Nov-2020 5:00 PM</td>
      <td>DOCTOR</td>
      <td>Cannabis_Recommendation</td>
      <td><span className="badge badge-success">In progress</span></td>
      <td><a href="#" onClick={()=>setShow(true)}><FaInfo style={{color:"mediumseagreen"}}/></a></td>
    </tr>
    <tr>
      <td>1</td>
      <td>30-Nov-2020 5:00 PM</td>
      <td>DOCTOR</td>
      <td>Cannabis_Recommendation</td>
      <td><span className="badge badge-info">Planned</span></td>
      <td><a href="#" onClick={()=>setShow(true)} ><FaInfo style={{color:"mediumseagreen"}}/></a></td>
    </tr>
  </tbody>
</Table>
    </div>
<Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Appointment Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AppointmentDetail/>
        
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>);
}


export default Appointments;