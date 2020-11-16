import React from "react";
import * as actions from '../action/GuestActions';
import {Button, Card, Col, Form} from "react-bootstrap";
import ErrorMessageWell from "./ErrorMessageWell";
class GuestDeleteForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id : 0
        };
        this.formOnChange = this.formOnChange.bind(this);
    }

    formOnChange(event){
        const {name,value} = event.target;
        this.setState({[name] :value});
    }

    render() {
        return(
            <div>
                <Card className="border border-dark bg-dark text-white">
                    <Card.Header>
                        <div style={{"float": "left"}} className="text-info">
                            Delete Guest
                        </div>
                        <ErrorMessageWell/>
                    </Card.Header>
                    <Form>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>GuestID</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  name="id"
                                                  id="id"
                                                  type="number"
                                                  value={this.state.id}
                                                  onChange={this.formOnChange}
                                                  className="bg-dark text-white"
                                                  placeholder="Enter GuestID" />
                                </Form.Group>
                            </Form.Row>
                            <Button disabled={this.state.id === 0} size={"sm"} variant="danger" onClick={()=> actions.deleteGuest(this.state)}>Delete</Button>
                        </Card.Body>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default GuestDeleteForm
