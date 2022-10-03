import React, {memo, FC} from 'react';
import classNames from "classnames";

import classes from "./Button.module.scss";

interface TopBarButtonProps {
    text: string,
    className?: string,
    version?: 'gray' | 'filled';
    size?: 'small' | 'medium' | 'large',
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<TopBarButtonProps> = memo(({text, size = 'small', version = 'gray', className, onClick}) => {
    return (
        <button
            onClick={onClick}
            className={classNames([
                classes.button,
                className,
                {[classes[`${size}Size`]]: !!size},
                {[classes[`${version}Version`]]: !!version}
            ])}
        >
            <span className={classes.text}>{text}</span>
        </button>
    )
})
