import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import SettingCounter from "./SettingCounter";

function App() {
    let [num, setNum] = useState(0)

    return (
        <div className="App">
            <SettingCounter/>
            <Counter num={num} setNum={setNum}/>
        </div>
    );
}

export default App;
