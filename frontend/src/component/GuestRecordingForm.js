import React from "react";
import * as actions from '../action/GuestActions';
import ErrorMessageWell from "./ErrorMessageWell";
class GuestRecordingForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            firstName: "",
            guestAge: 0,
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
                <ErrorMessageWell/>
                <label htmlFor={"firstName"} >First Name </label>
                <input type={"text"} id={"firstName"} name={"firstName"} value={this.state.firstName} onChange={this.formOnChange}/>
                <br/>
                <label htmlFor={"lastName"} >Last Name </label>
                <input type={"text"} id={"lastName"} name={"lastName"} value={this.state.lastName} onChange={this.formOnChange}/>
                <br/>
                <label htmlFor={"guestAge"} >Age </label>
                <input type={"number"} id={"guestAge"} name={"guestAge"} value={this.state.guestAge} onChange={this.formOnChange}/>
                <br/>
                <label htmlFor={"email"} >Email </label>
                <input type={"text"} id={"email"} name={"email"} value={this.state.email} onChange={this.formOnChange}/>
                <br/>
                <button onClick={()=> actions.recordGuest(this.state)}>Submit</button>
            </div>
        );
    }
}

export default GuestRecordingForm
