import React, {memo} from 'react'

import classes from './Notification.module.scss'
import classNames from "classnames";

export const NotificationContainer = memo(() => {
    return (
        <div className={classes.notificationContainer}>

            <div className={classes.dialogBox}>
                <div className={classes.backgroundBlur}></div>
                <div className={classes.header}>
                    <div className={classes.backgroundBlur}></div>
                    <div className={classes.contents}>
                        <div className={classes.left}>
                            <i className="far fa-comment"></i> iMessage
                        </div>
                        <div className={classes.right}>
                            Sun 1:23 pm
                        </div>
                    </div>
                </div>
                <div className={classNames([classes.contents, classes.mainContent])}>
                    <strong>
                        Em
                    </strong>
                    <br/>
                    Okay xx
                </div>
            </div>

        </div>
    )
})
