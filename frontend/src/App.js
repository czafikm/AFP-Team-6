import React from 'react';
import './App.scss';
import WatchRecordingForm from "./component/WatchRecordingForm";
import WatchList from "./component/WatchList";
import WatchDeleteForm from "./component/WatchDeleteForm";
import GuestRecordingForm from "./component/GuestRecordingForm";
import GuestDeleteForm from "./component/GuestDeleteForm";
import GuestList from "./component/GuestList";


function App() {
  return (
    <div className={["App","container"]}>
        <div className={"row"}>
            <div className={"col-md-3"}></div>
            <div className={"col-md-6"}>
                <br/>
                <WatchRecordingForm/>
                <br/>
                <WatchDeleteForm/>
                <br/>
                <WatchList/>
                <br/>
            </div>
            <div className={"col-md-3"}></div>
        </div>
        <br/><br/>
        <div className={"row"}>
            <div className={"col-md-3"}></div>
            <div className={"col-md-6"}>
                <br/>
                <GuestRecordingForm/>
                <br/>
                <GuestDeleteForm/>
                <br/>
                <GuestList/>
                <br/>
            </div>
            <div className={"col-md-3"}></div>
        </div>

    </div>
  );
}

export default App;
