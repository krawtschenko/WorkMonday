import React from 'react';
import Button from "./Button";

type CounterType = {
    num: number
    setNum: (num: number) => void
}

const Counter: React.FC<CounterType> = ({num, setNum}) => {

    const onClickIncHandler = () => {
        if (num < 5) {
            setNum(++num)
        }
    }

    const onClickResetHandler = () => {
        setNum(0)
    }

    const classForTitle = num === 5 ? `title titleRed` : 'title'

    return (
        <div className={'counter'}>
            <div className={'place'}>
                <h1 className={classForTitle}>{num}</h1>
            </div>
            <div className={'buttons'}>
                <Button className={'button'} disable={num === 5} name={'INC'} callback={onClickIncHandler}/>
                <Button className={'button'} disable={num === 0} name={'RESET'} callback={onClickResetHandler}/>
            </div>
        </div>
    );
};

export default Counter;