import React, {ChangeEvent, useEffect} from 'react';
import Button from "./components/Button";
import {ValuesType} from "./App";
import {restoreState, saveState} from "./localStorage";

type SettingCounterPropsType = {
    values: ValuesType
    setValues: (values: ValuesType) => void
    num: number | string
    setNum: (num: number | string) => void
}

const SettingCounter: React.FC<SettingCounterPropsType> = ({values, setValues, setNum, num}) => {
    useEffect(() => {
        getStorage()
    }, [])

    function onChangeMinValue(event: ChangeEvent<HTMLInputElement>) {
        values.minValue = Number(event.currentTarget.value)
        setValues({...values})
        saveState<number>('minValue', values.minValue)
        setNum('Press "SET"')
    }

    function onChangeMaxValue(event: ChangeEvent<HTMLInputElement>) {
        values.maxValue = Number(event.currentTarget.value)
        setValues({...values})
        saveState<number>('maxValue', values.maxValue)
        setNum('Press "SET"')
    }

    function getStorage() {
        const minValue: number = restoreState<number>('minValue', values.minValue)
        const maxValue: number = restoreState<number>('maxValue', values.maxValue)
        setValues({minValue, maxValue})
        setNum(minValue)
    }

    const incorrectValue = values.minValue >= values.maxValue || values.minValue < 0 || values.maxValue < 0
    if (incorrectValue) {
        setNum('Incorrect')
    }

    const incorrectValuesMin = (values.minValue >= values.maxValue) || (values.minValue < 0)
    const incorrectValuesMax = (values.minValue >= values.maxValue) || (values.maxValue < 0)
    const classForInputMin = incorrectValuesMin ? 'input inputError' : 'input'
    const classForInputMax = incorrectValuesMax ? 'input inputError' : 'input'

    return (
        <div className={'counter'}>
            <div className={'placeSetting'}>
                <span className={'span'}>Min value:</span>
                <input className={classForInputMin} value={values.minValue} type={'number'} onChange={(event) => {
                    onChangeMinValue(event)
                }}/>
                <span className={'span'}>Max value:</span>
                <input className={classForInputMax} value={values.maxValue} type={'number'} onChange={(event) => {
                    onChangeMaxValue(event)
                }}/>
            </div>
            <div className={`buttons buttonsSetting`}>
                <Button className={'button'} name={'SET'} callback={getStorage} disable={incorrectValuesMin || incorrectValuesMax || num >= values.minValue}/>
            </div>
        </div>
    );
};

export default SettingCounter;