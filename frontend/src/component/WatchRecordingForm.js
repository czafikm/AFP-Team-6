import React from "react";
import * as actions from '../action/WatchActions';
import ErrorMessageWell from "./ErrorMessageWell";
import {Card, Form, Button, Col} from "react-bootstrap";
class WatchRecordingForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            balance : 0,
            paymentStatus : "PAID"
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
                            Add Watch
                        </div>

                    </Card.Header>
                    <Form>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId={"formGridBalance"}>
                                    <Form.Label>Balance</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  name="balance"
                                                  type="number"
                                                  value={this.state.balance}
                                                  onChange={this.formOnChange}
                                                  className="bg-dark text-white"
                                                  placeholder="Enter Balance" />
                                </Form.Group>
                                <Form.Group as={Col} controlId={"formGridPaymentStatus"}>
                                    <Form.Label>PaymentStatus</Form.Label>
                                    <Form.Control required as="select"
                                                  name="paymentStatus"
                                                  type="text"
                                                  value={this.state.paymentStatus}
                                                  onChange={this.formOnChange}
                                                  className="bg-dark text-white"
                                                  placeholder="Enter PaymentStatus">
                                        <option value="PAID">PAID</option>
                                        <option value="NOT_PAID">NOT_PAID</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer>
                            <Button disabled={this.state.balance === 0} size={"sm"} variant="success" type="submit" onClick={()=> actions.recordWatch(this.state)}>
                                Submit
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>

            </div>
        );
    }
}

export default WatchRecordingForm
