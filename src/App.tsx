import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import SettingCounter from "./SettingCounter";

function App() {
    let minValue = 0
    let maxValue = 10
    let [num, setNum] = useState<number>(minValue)

    return (
        <div className="App">
            <SettingCounter minValue={minValue} maxValue={maxValue}/>
            <Counter num={num} setNum={setNum}/>
        </div>
    );
}

export default App;
