import React from 'react';
import Button from "./Button";
import {ValuesType} from "./App";

type CounterType = {
    num: number | string
    setNum: (num: number | string) => void
    values: ValuesType
}

const Counter: React.FC<CounterType> = ({num, setNum, values}) => {
    function onClickIncHandler() {
        if (num < values.maxValue) {
            setNum(Number(num) + 1)
        }
    }

    function onClickResetHandler() {
        setNum(values.minValue)
    }

    const classForTitle = num === values.maxValue || num === 'Incorrect' ? `title titleRed` : 'title'
    const incorrectValue = values.minValue >= values.maxValue || values.minValue < 0 || values.maxValue < 0

    return (
        <div className={'counter'}>
            <div className={'place'}>
                <h1 className={classForTitle}>{num}</h1>
            </div>
            <div className={'buttons'}>
                <Button className={'button'} disable={num === values.maxValue || incorrectValue} name={'INC'} callback={onClickIncHandler}/>
                <Button className={'button'} disable={num === values.minValue || incorrectValue} name={'RESET'} callback={onClickResetHandler}/>
            </div>
        </div>
    );
};

export default Counter;