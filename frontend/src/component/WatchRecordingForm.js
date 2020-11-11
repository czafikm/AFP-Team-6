import React from "react";
import * as actions from '../action/WatchActions';
import ErrorMessageWell from "./ErrorMessageWell";
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
                <ErrorMessageWell/>
                <label htmlFor={"balance"} >Balance</label>
                <input type={"number"} id={"balance"} name={"balance"} value={this.state.balance} onChange={this.formOnChange}/>
                <br/>
                <label htmlFor={"paymentStatus"}>Payment Status</label>
                <input type={"text"} id={"paymentStatus"} name={"paymentStatus"} value={this.state.paymentStatus} onChange={this.formOnChange}/>
                <br/>
                <button onClick={()=> actions.recordWatch(this.state)}>Submit</button>
            </div>
        );
    }
}

export default WatchRecordingForm
