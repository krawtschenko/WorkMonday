import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    className: string
    disable: boolean
}

const Button: React.FC<ButtonPropsType> = ({className, callback, name, disable}) => {
    return (
        <button className={className} onClick={callback} disabled={disable}>{name}</button>
    );
};

export default Button;