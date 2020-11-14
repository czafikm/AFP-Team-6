import React from 'react';
import {default as store} from '../store/GuestStore'
import {Card, Table} from "react-bootstrap";
import {fetchGuest} from "../action/GuestActions";

class GuestList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {guests : [],
            date: new Date().toLocaleDateString()};
        this._updateState = this._updateState.bind(this);
        fetchGuest();
    }


    componentDidMount() {
        store.addChangeListener(this._updateState);
    }


    componentWillUnmount() {
        store.removeChangeListener(this._updateState);
    }

    _updateState(){
        this.setState({guests : store._guests});
    }

    render() {
        return(
            <div>
                <Card className="border border-dark bg-dark text-white">
                    <Card.Header>
                        <div style={{"float": "left"}} className="text-info">
                            Guest List
                        </div>
                    </Card.Header>
                    <Card.Body>

                        <Table bordered hover striped variant="dark" id="productTable">
                            <thead>
                            <tr align="center">
                                <th>ID</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.guests.map(({id, firstName, lastName,guestAge,email}, index)=> {
                                return(
                                    <tr key={index} align="center">
                                        <td>{id}</td>
                                        <td>{firstName}</td>
                                        <td>{lastName}</td>
                                        <td>{guestAge}</td>
                                        <td>{email}</td>
                                    </tr>);
                            })}
                            </tbody>
                        </Table>
                    </Card.Body>
                    <Card.Footer>
                        {this.state.date}
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default GuestList;
