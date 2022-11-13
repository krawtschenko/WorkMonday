import React from 'react';
import Button from "./Button";

const SettingCounter = () => {
    return (
        <div className={'counter'}>
            <div className={`place`}>
                <div className={'placeSetting'}>
                    <input className={'input'} type={'number'}/>
                    <input className={'input'} type="text"/>
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