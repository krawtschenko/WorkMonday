import React from 'react';
import './App.css';
import SettingCounterRedux from "./components/SettingCounterRedux";
import CounterRedux from "./components/CounterRedux";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {changeMaxValueAC, changeMinValueAC, ValuesType} from "./redux/valuesReducer";
import {changeNumToNumberAC} from "./redux/numReducer";

function App() {
    const values = useSelector<AppRootStateType, ValuesType>(state => state.values)
    const num = useSelector<AppRootStateType, number | string>(state => state.num)
    const dispatch = useDispatch()

    function onChangeMinValue(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(changeMinValueAC(Number(event.currentTarget.value)))
        dispatch(changeNumToNumberAC('Press "SET"'))
    }

    function onChangeMaxValue(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(changeMaxValueAC(Number(event.currentTarget.value)))
        dispatch(changeNumToNumberAC('Press "SET"'))
    }

    function setNum(value: number | string) {
        dispatch(changeNumToNumberAC(value))
    }

    return (
        <div className="App">
            <SettingCounterRedux values={values}
                                 num={num}
                                 setNum={setNum}
                                 onChangeMinValue={onChangeMinValue}
                                 onChangeMaxValue={onChangeMaxValue}
            />
            <CounterRedux num={num} setNum={setNum} values={values}/>
        </div>
    );
}

export default App;
