import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import SettingCounter from "./SettingCounter";

export type ValuesType = {
    minValue: number
    maxValue: number
}

function App() {
    const [values, setValues] = useState<ValuesType>({
        minValue: 0,
        maxValue: 5
    })
    const [num, setNum] = useState<number>(values.minValue)

    return (
        <div className="App">
            <SettingCounter values={values} setValues={setValues} setNum={setNum}/>
            <Counter num={num} setNum={setNum} values={values}/>
        </div>
    );
}

export default App;
