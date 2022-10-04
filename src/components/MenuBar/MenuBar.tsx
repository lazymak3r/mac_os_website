import React, {memo, useMemo, useCallback} from 'react';
import classNames from "classnames";

import classes from './MenuBar.module.scss'
import {Tooltip} from "../Tooltip/Tooltip";
import {BarIcon, IconName} from "../BarIcon/BarIcon";
import {WindowProps} from "../Window/Window";
import {useDispatch, useSelector} from "react-redux";
import {openWindow} from "../../store/reducers/window.reducer";
import {selectOpenedWindows} from "../../store/selectors/window.selector";

interface Icons {
    id: number,
    iconName: IconName,
    tooltip: string
    windowName: string
}

export const MenuBar = memo(() => {
    const dispatch = useDispatch();

    const windows = useSelector(selectOpenedWindows)

    const icons: Icons[] = useMemo(() => [
        {id: 1, iconName: 'finder', tooltip: 'Finder', windowName: 'Finder'},
        {id: 2, iconName: 'activity_monitor', tooltip: 'Activity Monitor', windowName: 'Activity Monitor'},
        {id: 3, iconName: 'app_store', tooltip: 'App Store', windowName: 'App Store'},
        {id: 4, iconName: 'books', tooltip: 'Books', windowName: 'Books'},
        {id: 5, iconName: 'calculator', tooltip: 'Calculator', windowName: 'Calculator'},
        {id: 6, iconName: 'discord', tooltip: 'Discord', windowName: 'Discord'},
        {id: 7, iconName: 'facebook', tooltip: 'Facebook', windowName: 'Facebook'},
        {id: 8, iconName: 'github', tooltip: 'Github', windowName: 'Github'},
        {id: 9, iconName: 'google_chrome', tooltip: 'Google Chrome', windowName: 'Google Chrome'},
        {id: 10, iconName: 'instagram', tooltip: 'Instagram', windowName: 'Instagram'},
        {id: 11, iconName: 'notes', tooltip: 'Notes', windowName: 'Notes'},
        {id: 12, iconName: 'photos', tooltip: 'Photos', windowName: 'Photos'},
        {id: 13, iconName: 'qr_encoder', tooltip: 'Qr Encoder', windowName: 'Qr Encoder'},
        {id: 14, iconName: 'launchpad', tooltip: 'Launchpad', windowName: 'Launchpad'},
        {id: 15, iconName: 'safari', tooltip: 'Safari', windowName: 'Safari'},
        {id: 16, iconName: 'settings', tooltip: 'Settings', windowName: 'Settings'},
        {id: 17, iconName: 'spotify', tooltip: 'Spotify', windowName: 'Spotify'},
        {id: 18, iconName: 'telegram', tooltip: 'Telegram', windowName: 'Telegram'},
        {id: 19, iconName: 'terminal', tooltip: 'Terminal', windowName: 'Terminal'},
        {id: 21, iconName: 'twitter', tooltip: 'Twitter', windowName: 'Twitter'},
        {id: 22, iconName: 'whatsapp', tooltip: 'Whatsapp', windowName: 'Whatsapp'},
        {id: 23, iconName: 'xcode', tooltip: 'Xcode', windowName: 'Xcode'},
        {id: 24, iconName: 'youtube', tooltip: 'Youtube', windowName: 'Youtube'},
        {id: 25, iconName: 'trash', tooltip: 'Trash', windowName: 'Trash'},
    ], []);

    const onClickHandler = useCallback((icon: Icons) => {
        openWindowHandler({
            id: icon.id,
            name: icon.windowName,
            size: {width: 900, height: 450}
        })
    }, [])

    const openWindowHandler = (params: WindowProps) => {
        dispatch(openWindow(params))
    }

    return (
        <div className={classes.menuBarContainer}>
            <div className={classes.menuBarWrapper}>
                <div
                    className={classNames(classes.menuBar, 'menu-bar')}>
                    {icons.map((icon, index) => {
                        return (
                            <Tooltip key={icon.id} text={icon.tooltip}>
                                <BarIcon
                                    data-index={index}
                                    iconName={icon.iconName}
                                    className={classes.icon}
                                    opened={windows?.findIndex(wind => wind.id === icon.id) !== -1}
                                    onClick={(() => onClickHandler(icon))}
                                />
                            </Tooltip>
                        )
                    })}
                </div>
            </div>
        </div>
    )
})
