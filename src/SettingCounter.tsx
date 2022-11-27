import React, {ChangeEvent, useEffect} from 'react';
import Button from "./Button";
import {ValuesType} from "./App";
import {restoreState, saveState} from "./localStorage";

type SettingCounterPropsType = {
    values: ValuesType
    setValues: (values: ValuesType) => void
    setNum: (num: number) => void
}

const SettingCounter: React.FC<SettingCounterPropsType> = ({values, setValues, setNum}) => {
    useEffect(() => {
        getStorage()
    }, [])

    function onChangeMinValue(event: ChangeEvent<HTMLInputElement>) {
        values.minValue = Number(event.currentTarget.value)
        setValues({...values})
        saveState<number>('minValue', values.minValue)
    }

    function onChangeMaxValue(event: ChangeEvent<HTMLInputElement>) {
        values.maxValue = Number(event.currentTarget.value)
        setValues({...values})
        saveState<number>('maxValue', values.maxValue)
    }

    function getStorage() {
        const minValue: number = restoreState<number>('minValue', values.minValue)
        const maxValue: number = restoreState<number>('maxValue', values.maxValue)
        setValues({minValue, maxValue})
        setNum(minValue)
    }

    return (
        <div className={'counter'}>
            <div className={'placeSetting'}>
                <span className={'span'}>Min value:</span>
                <input className={'input'} value={values.minValue} type={'number'} onChange={(event) => {
                    onChangeMinValue(event)
                }}/>
                <span className={'span'}>Max value:</span>
                <input className={'input'} value={values.maxValue} type={'number'} onChange={(event) => {
                    onChangeMaxValue(event)
                }}/>
            </div>
            <div className={`buttons buttonsSetting`}>
                <Button className={'button'} name={'SET'} callback={getStorage}/>
            </div>
        </div>
    );
};

export default SettingCounter;