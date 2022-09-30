import React, {memo, useState, useEffect} from 'react';

import classes from './Time.module.scss'

export const Time = memo(() => {
    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    return (
        <div className={classes.timeContainer}>
            <p className={classes.date}>
                {dateState.toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                })}
            </p>
            <p className={classes.time}>
                {dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: false,
                })}
            </p>
        </div>
    );
})
