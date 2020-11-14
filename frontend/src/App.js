import React from 'react';
import './App.scss';
import WatchList from "./component/WatchList";
import GuestRecordingForm from "./component/GuestRecordingForm";
import GuestList from "./component/GuestList";
import NavigationBar from "./component/NavigationBar";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Row, Container,Col} from "react-bootstrap";
import GuestDeleteForm from "./component/GuestDeleteForm";
import WatchDeleteForm from "./component/WatchDeleteForm";
import ErrorMessageWell from "./component/ErrorMessageWell";
import WatchRecordingForm from "./component/WatchRecordingForm";
import HomeForm from "./component/HomeForm";


function App() {
  return (

      <div className={["App","container"]}>
      <Router>
          <NavigationBar/>
          <Container>
              <Row>
                  <Col lg={12} className={"margin-top"}>
                      <Switch>
                          <Route path="/home">
                              <HomeForm/>
                          </Route>
                          <Route path="/watchRecord">
                              <WatchRecordingForm/>
                              <br/>
                          </Route>
                          <Route path={"/watchList"}>
                              <br/>
                              <WatchList/>
                              <br/>
                              <ErrorMessageWell/>
                              <WatchDeleteForm/>
                              <br/>
                          </Route>
                          <Route path="/guestRecord">
                              <br/>
                              <GuestRecordingForm/>
                              <br/>
                          </Route>
                          <Route path="/guestList">
                              <br/>
                              <GuestList/>
                              <br/>
                              <ErrorMessageWell/>
                              <GuestDeleteForm/>
                              <br/>
                          </Route>
                      </Switch>
                  </Col>
              </Row>
          </Container>
      </Router>
      </div>

  );
}

export default App;
