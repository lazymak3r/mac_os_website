import React, {useMemo, useState, FC} from 'react';
import {v4 as uuid} from 'uuid'
import {createPortal} from 'react-dom';
import {TransitionGroup} from "react-transition-group";

import classes from './Notification.module.scss'
import {Notification} from './Notification';
import {NotificationContext} from './NotificationContext';
import {AppIconNames} from "../../utils/appIcons";

export interface INotification {
    id: string,
    appName: AppIconNames,
    title: React.ReactNode,
    content: React.ReactNode,
    autoClose?: number,
}

interface NotificationProviderProps {
    children: React.ReactNode
}

export const NotificationProvider: FC<NotificationProviderProps> = ({children}) => {
    const [notifications, setNotifications] = useState<INotification[]>([]);

    const open = (params: Omit<INotification, 'id'>) =>
        setNotifications((prevNotifications) => [
            ...prevNotifications,
            {id: uuid(), ...params},
        ]);

    const close = (id: string) => {
        setNotifications((currentNotifications) =>
            currentNotifications.filter((notification) => notification.id !== id)
        );
    }

    const contextValue = useMemo(() => ({open, notifications}), []);

    return (
        <NotificationContext.Provider value={contextValue}>
            {children}
            {createPortal(
                <div className={classes.notificationContainer}>
                    <TransitionGroup>
                        {notifications.map((notification) => (
                            <Notification
                                {...notification}
                                onClose={() => close(notification.id)}
                                key={notification.id}
                            />
                        ))}
                    </TransitionGroup>
                </div>,
                document.body
            )}
        </NotificationContext.Provider>
    );
};
