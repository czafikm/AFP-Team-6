import React from "react";
import * as actions from '../action/GuestActions';
import ErrorMessageWell from "./ErrorMessageWell";
import {Button, Card, Col, Form} from "react-bootstrap";
class GuestRecordingForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            firstName: "",
            guestAge: "",
            lastName: ""
        };
        this.formOnChange = this.formOnChange.bind(this);
    }

    formOnChange(event){
        const {name,value} = event.target;
        this.setState({[name] : value});
    }

    render() {
        return(
            <div>
                <br/>
                <br/>
                <Card className="border border-dark bg-dark text-white">
                    <Card.Header>
                        <ErrorMessageWell/>
                            <div style={{"float": "left"}} className="text-info">
                                Add Guest
                            </div>
                        </Card.Header>
                    <Form>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId={"formGridFirstName"}>
                                    <Form.Label>FirstName</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  name="firstName"
                                                  type="text"
                                                  value={this.state.firstName}
                                                  onChange={this.formOnChange}
                                                  className="bg-dark text-white"
                                                  placeholder="Enter Firstname" />
                                </Form.Group>
                                <Form.Group as={Col} controlId={"formGridLastName"}>
                                    <Form.Label>LastName</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  name="lastName"
                                                  type="text"
                                                  value={this.state.lastName}
                                                  onChange={this.formOnChange}
                                                  className="bg-dark text-white"
                                                  placeholder="Enter LastName" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId={"formGridGuestAge"}>
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  name="guestAge"
                                                  type="number"
                                                  value={this.state.guestAge}
                                                  onChange={this.formOnChange}
                                                  className="bg-dark text-white"
                                                  placeholder="Enter Age" />
                                </Form.Group>
                                <Form.Group as={Col} controlId={"formGridEmail"}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  name="email"
                                                  type="email"
                                                  value={this.state.email}
                                                  onChange={this.formOnChange}
                                                  className="bg-dark text-white"
                                                  placeholder="Enter Email" />
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer>
                            <Button disabled={this.state.email.length === 0 || this.state.firstName === 0 || this.state.lastName === 0 || this.state.guestAge === 0} size={"sm"} variant="success" type="submit" onClick={()=>actions.recordGuest(this.state)}>
                                Submit
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default GuestRecordingForm
