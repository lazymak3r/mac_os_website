import React, {memo, useRef, useState, FC, useEffect, useMemo} from 'react'
import classNames from "classnames";
import {CSSTransition} from 'react-transition-group';

import classes from './Notification.module.scss'
import {INotification} from "./NotificationProvider";
import {getIconByName} from "../../utils/appIcons";

interface NotificationProps extends INotification {
    onClose?: () => void;
}

export const Notification: FC<NotificationProps> = memo((
        {
            id,
            appName,
            title,
            content,
            autoClose = 5000,
            onClose
        }) => {
        const nodeRef = useRef(null);
        const [show, setShow] = useState(true)

        const iconSrc = useMemo(() => getIconByName(appName), [appName])

        useEffect(() => {
            if (autoClose > 0) {
                const timer = setTimeout(() => {
                    setShow(false)
                }, autoClose)

                return () => {
                    clearTimeout(timer)
                }
            }
        }, [])

        return (
            <CSSTransition
                in={show}
                nodeRef={nodeRef}
                timeout={400}
                onExit={() => {
                    onClose?.();
                }}
                classNames={{
                    enter: classes.enter,
                    enterActive: classes.enterActive,
                    exit: classes.exit,
                    exitActive: classes.exitActive,
                }}
                mountOnEnter={true}
                unmountOnExit={true}
            >
                <div className={classes.notificationBox} ref={nodeRef}>
                    <button className={classes.close} onClick={() => setShow(false)}>&times;</button>
                    <div className={classes.notificationBoxInner}>
                        <div className={classes.appIconContainer}>
                            <img src={iconSrc} alt={iconSrc} className={classes.appIcon}/>
                        </div>
                        <div className={classes.notificationContent}>
                            <strong className={classes.notificationTitle}>
                                {title}
                            </strong>
                            <span className={classes.notificationInfo}>
                                {content}
                            </span>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        )
    }
)
