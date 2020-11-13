import React from "react";
import * as actions from '../action/GuestActions';
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
                <label htmlFor={"id"} >Guest ID</label>
                <input type={"number"} id={"id"} name={"id"} value={this.state.id} onChange={this.formOnChange}/>
                <button onClick={()=> actions.deleteGuest(this.state)}>Delete</button>
            </div>
        );
    }
}

export default GuestDeleteForm
