import React, {memo, FC} from 'react';

import classes from './Switch.module.scss'

interface ConnectWalletPopupProps {
    checked: boolean,
    onChange: (value: boolean) => void;
}

export const Switch: FC<ConnectWalletPopupProps> = memo(({checked, onChange}) => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked)
    }

    return (
        <label className={classes.formSwitch}>
            <input type="checkbox" checked={checked} onChange={onChangeHandler}/>
            <i></i>
        </label>
    )
})
