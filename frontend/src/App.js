import React from 'react';
import './App.scss';
import WatchRecordingForm from "./component/WatchRecordingForm";
import WatchList from "./component/WatchList";
import WatchDeleteForm from "./component/WatchDeleteForm";

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
    </div>
  );
}

export default App;
