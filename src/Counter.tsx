import React from 'react';
import Button from "./Button";
import {ValuesType} from "./App";

type CounterType = {
    num: number
    setNum: (num: number) => void
    values: ValuesType
}

const Counter: React.FC<CounterType> = ({num, setNum, values}) => {
    function onClickIncHandler() {
        if (num < values.maxValue) {
            setNum(++num)
        }
    }

    function onClickResetHandler() {
        setNum(values.minValue)
    }

    const classForTitle = num === values.maxValue ? `title titleRed` : 'title'

    return (
        <div className={'counter'}>
            <div className={'place'}>
                <h1 className={classForTitle}>{num}</h1>
            </div>
            <div className={'buttons'}>
                <Button className={'button'} disable={num === values.maxValue} name={'INC'} callback={onClickIncHandler}/>
                <Button className={'button'} disable={num === values.minValue} name={'RESET'} callback={onClickResetHandler}/>
            </div>
        </div>
    );
};

export default Counter;