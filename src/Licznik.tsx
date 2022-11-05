import React from 'react';
import Button from "./Button";

type LicznikType = {
    numer: number
    setNumer: (numer: number) => void
}

const Licznik: React.FC<LicznikType> = ({numer, setNumer}) => {

    const onClickIncHandler = () => {
        numer < 5 && setNumer(++numer)
    }

    const onClickResetHandler = () => {
        setNumer(0)
    }

    const classForTitle = numer === 5 ? 'titleRed' : ''

    return (
        <div className={'licznik'}>
            <div className={'plac'}>
                <h1 className={classForTitle}>{numer}</h1>
            </div>
            <div className={'przyciski'}>
                <Button className={'przycisk'} disable={numer === 5} name={'INC'} callback={onClickIncHandler}/>
                <Button className={`przycisk ${classForTitle}`} disable={numer === 0} name={'RESET'} callback={onClickResetHandler}/>
            </div>
        </div>
    );
};

export default Licznik;