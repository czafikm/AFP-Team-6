import React from 'react';
import {default as store} from '../store/WatchStore'
import { Card, Table} from "react-bootstrap";
import {fetchWatches} from "../action/WatchActions";

class WatchList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {watches : [],
            date: new Date().toLocaleDateString()}

        this._updateState = this._updateState.bind(this);
        fetchWatches();
    }

    componentDidMount() {
        store.addChangeListener(this._updateState);
    }


    componentWillUnmount() {
        store.removeChangeListener(this._updateState);
    }

    _updateState(){
        this.setState({watches : store._watches});
    }

    render() {
        return(

                <div>
                    <Card className="border border-dark bg-dark text-white">
                        <Card.Header>
                            <div style={{"float": "left"}} className="text-info">
                                Watch List
                            </div>
                        </Card.Header>
                        <Card.Body>

                            <Table bordered hover striped variant="dark" id="productTable">
                                <thead>
                                <tr align="center">
                                    <th>ID</th>
                                    <th>Balance</th>
                                    <th>PaymentStatus</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.watches.map(({id, balance, paymentStatus}, index)=> {
                                   return(
                                    <tr key={index} align="center">
                                        <td>{id}</td>
                                        <td>{balance}</td>
                                        <td>{paymentStatus}</td>
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

export default WatchList;
