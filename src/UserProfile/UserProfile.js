import {useState} from 'react'
import { Card ,Col,Form} from 'react-bootstrap'
const UserProfile = () => {
    const [isEditMode,setIsEditMode] = useState(false);
    return (
        <Col xs={10}>
       <div className="container">
 
            <h2>User Profile</h2>
            <div className="row">
                <div className="col-md-6">
                    <Card>
                        <Card.Header>Name</Card.Header>
                        {isEditMode ? <Form.Control type="text" value="NAME" /> : <Card.Body>NAME</Card.Body>}
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card>
                        <Card.Header>Last Name</Card.Header>
                        {isEditMode ? <Form.Control type="text" value="LAST NAME" /> : <Card.Body>LAST NAME</Card.Body>}{"\n"}
                    </Card>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-6">
                    <Card>
                        <Card.Header>Email</Card.Header>
                        {isEditMode ? <Form.Control type="text" value="abc@email.com" /> : <Card.Body>abc@email.com</Card.Body>}
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card>
                        <Card.Header>Telephone</Card.Header>
                        {isEditMode ? <Form.Control type="text" value="20034243" /> : <Card.Body>20034243</Card.Body>}{"\n"}
                    </Card>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-12">
                    <Card>
                        <Card.Header>Address</Card.Header>
                        {isEditMode ? <Form.Control type="text" value="house no 120" /> : <Card.Body>house no 120</Card.Body>}
                    </Card>
                </div>
                
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-3">
                    <Card>
                        <Card.Header>Town</Card.Header>
                        {isEditMode ? <Form.Control type="text" value="Town" /> : <Card.Body>Town</Card.Body>}
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card>
                        <Card.Header>State</Card.Header>
                        {isEditMode ? <Form.Control type="text" value="State" /> : <Card.Body>State</Card.Body>}{"\n"}
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card>
                        <Card.Header>Country</Card.Header>
                        {isEditMode ? <Form.Control type="text" value="Country" /> : <Card.Body>Country</Card.Body>}
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card>
                        <Card.Header>Postal Code</Card.Header>
                        {isEditMode ? <Form.Control type="text" value="Postal Code" /> : <Card.Body>Postal Code</Card.Body>}{"\n"}
                    </Card>
                </div>
            </div>
            <hr/>
            <div className="row">
            <div className="col">
            {!isEditMode?<button className="btn btn-info" onClick={()=>setIsEditMode(true)}>Edit Profile</button>:<></> }
            </div>
            
            </div>
            <br/>
            <div className="row text-center">
                
                
                    {
                        isEditMode?
                        <><div className="col">
                        <button className="btn btn-danger" onClick={()=>setIsEditMode(false)}>Cancel</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-success" onClick={()=>setIsEditMode(true)}>Save</button>
                    </div></>:<></>
                    }
                
            </div>
            </div>
        </Col>
       
    )
}

export default UserProfile;