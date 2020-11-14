import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";

class NavigationBar extends React.Component
{
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Link to={"home"} className={"navbar-brand"}>
                   Home
                </Link>
                    <Nav className="mr-auto">
                        <Link to={"watchRecord"} className={"nav-link"}>Add Watch</Link>
                        <Link to={"watchList"} className={"nav-link"}>Watch List</Link>
                        <Link to={"guestRecord"} className={"nav-link"}>Add Guest</Link>
                        <Link to={"guestList"} className={"nav-link"}>Guest List</Link>
                    </Nav>
            </Navbar>
        )

    }
}
export default NavigationBar