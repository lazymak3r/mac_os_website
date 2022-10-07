import React, {createContext} from 'react';
import {INotification} from "./NotificationProvider";

const noop = (params: Omit<INotification, 'id'>) => {
}

interface INotificationContext {
    open: (params: Omit<INotification, 'id'>) => void;
    notifications: INotification[],
}

export const NotificationContext: React.Context<INotificationContext> = createContext({
    open: noop,
    notifications: [] as INotification[]
});
