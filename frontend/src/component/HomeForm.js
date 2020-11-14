import React, {Component} from "react";
import {Jumbotron} from "react-bootstrap";

export default class HomeForm extends Component {
    render() {
        return (
            <div>
                <br/>
            <br/>
                <br/>
            <Jumbotron className="bg-light text-black text-center border border-secondary">
                <h1>Wellness Budget Project</h1>
                <blockquote className={"blockquote mb-0"}>
                    <p>
                        Created By: AFP-TEAM-6
                    </p>
                </blockquote>
            </Jumbotron>
            </div>
        );
    }
}