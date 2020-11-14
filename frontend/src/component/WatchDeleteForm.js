import React from "react";
import * as actions from '../action/WatchActions';
import {Button, Card, Col, Form} from "react-bootstrap";
class WatchDeleteForm extends React.Component{

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
                           Delete Watch
                        </div>
                    </Card.Header>
                    <Form>
               <Card.Body>
                   <Form.Row>
                       <Form.Group as={Col}>
                           <Form.Label>WatchID</Form.Label>
                           <Form.Control required autoComplete="off"
                                         name="id"
                                         id="id"
                                         type="number"
                                         value={this.state.id}
                                         onChange={this.formOnChange}
                                         className="bg-dark text-white"
                                         placeholder="Enter WatchID" />
                       </Form.Group>
                   </Form.Row>
                <Button disabled={this.state.id === 0} size={"sm"} variant="danger" onClick={()=> actions.deleteWatch(this.state)}>Delete</Button>
               </Card.Body>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default WatchDeleteForm
