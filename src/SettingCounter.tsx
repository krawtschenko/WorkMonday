import React from 'react';
import Button from "./Button";

type SettingCounterPropsType = {
    minValue: number
    maxValue: number
}

const SettingCounter: React.FC<SettingCounterPropsType> = ({minValue, maxValue}) => {
    return (
        <div className={'counter'}>
            <div className={`place`}>
                <div className={'placeSetting'}>
                    <span className={'span'}>Min value:</span>
                    <input className={'input'} value={minValue} type={'number'}/>
                    <span className={'span'}>Max value:</span>
                    <input className={'input'} value={maxValue} type={'number'}/>
                </div>
            </div>
            <div className={`buttons buttonsSetting`}>
                <Button className={'button'} name={'SET'} callback={() => {
                }}/>
            </div>
        </div>
    );
};

export default SettingCounter;