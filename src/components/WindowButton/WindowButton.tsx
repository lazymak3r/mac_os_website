import React, {memo, useMemo, FC} from 'react';
import classNames from "classnames";

import classes from "./WindowButton.module.scss";
import {ReactComponent as Exit} from '../../assets/svg/close.svg'
import {ReactComponent as Minimize} from '../../assets/svg/minimize.svg'
import {ReactComponent as Resize} from '../../assets/svg/resize.svg'

export interface WindowProps {
    type: 'exit' | 'minimize' | 'resize',
    className?: string,
    onClick?: (event: React.MouseEvent) => void;
}

export const WindowButton: FC<WindowProps> = memo(({type, className, onClick}) => {

    const Icon = useMemo(() => {
        const icons = {
            exit: Exit,
            minimize: Minimize,
            resize: Resize,
        }
        return icons[type]
    }, [type])

    return (
        <button
            onClick={onClick}
            className={classNames([classes.button, className, classes[type]])}
        >
            <Icon width={10} height={10}/>
        </button>
    )
})
