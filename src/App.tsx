import React, {useState} from 'react';
import './App.css';
import Licznik from "./Licznik";

function App() {
    let [numer, setNumer] = useState(0)

    return (
        <div className="App">
            <Licznik numer={numer} setNumer={setNumer}/>
        </div>
    );
}

export default App;
