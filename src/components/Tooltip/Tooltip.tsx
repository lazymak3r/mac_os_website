import React, {memo} from 'react';

import classes from './Tooltip.module.scss'

interface Props {
    text: string
    children?: React.ReactNode
}


export const Tooltip: React.FC<Props> = memo(({text, children}) => {
    return (
        <span className={classes.tooltipContainer}>
            {children}
            {!!text && (
                <span className={classes.tooltip}>
                    <span className={classes.tooltipArrow}/>
                    <span className={classes.tooltipInner}>{text}</span>
                </span>
            )}
        </span>
    )
})