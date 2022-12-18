import React from 'react';
import Button from "./Button";
import {ValuesType} from "../App";

type SettingCounterPropsType = {
    values: ValuesType
    num: number | string
    setNum: (value: number | string) => void
    onChangeMinValue: (event: React.ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SettingCounterRedux: React.FC<SettingCounterPropsType> = (
    {
        values,
        num,
        setNum,
        onChangeMinValue,
        onChangeMaxValue
    }) => {
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
                <Button className={'button'} name={'SET'} callback={() => setNum(values.minValue)}
                        disable={incorrectValuesMin || incorrectValuesMax || num >= values.minValue}/>
            </div>
        </div>
    );
};

export default SettingCounterRedux;