import React, {memo, FC} from 'react';
import classNames from "classnames";

import classes from './Spinner.module.scss'

interface SpinnerProps {
    loading: boolean,
    color?: string,
    className?: string,
    children?: React.ReactNode,
    size?: 'small' | 'middle' | 'large'
}

export const Spinner: FC<SpinnerProps> = memo(({loading, children, color, size = 'small', className}) => {
    return (
        <div className={classNames([classes.container, className])}>
            {loading ?
                <div className={classNames([classes.spinner, {[classes[`${size}Size`]]: !!size}])}>
                    {
                        Array(12).fill(0).map((_, index) => {
                            return (
                                <div
                                    style={{
                                        backgroundColor: color || 'white'
                                    }}
                                    className={classes[`bar${index + 1}`]}
                                />
                            )
                        })
                    }
                </div>
                :
                children
            }
        </div>
    )
})
