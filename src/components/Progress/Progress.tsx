import React, {memo, FC,} from 'react'
import classNames from "classnames";

import classes from './Progress.module.scss'

interface ProgressProps {
    value: number;
    className?: string
}

export const Progress: FC<ProgressProps> = memo(({value, className}) => {
        return (
            <div className={classNames([classes.progress, className])}>
                <div className={classes.progressContainer}>
                    <div style={{width: `${value}%`}} className={classes.progressInner}/>
                </div>
            </div>
        )
    }
)
