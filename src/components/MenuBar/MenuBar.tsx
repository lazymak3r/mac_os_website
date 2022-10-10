import React, {memo, useMemo} from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";

import classes from './MenuBar.module.scss'
import {Tooltip} from "../Tooltip/Tooltip";
import {BarIcon} from "../BarIcon/BarIcon";
import {openWindow} from "../../store/reducers/window.reducer";
import {AppIconNames} from "../../utils/appIcons";
import {selectOpenedWindows} from "../../store/selectors/window.selector";
import {toggleLaunchpad} from "../../store/reducers/launchpad.reducer";
import {selectLaunchpadIsOpen} from "../../store/selectors/launchpad.selector";

interface Icons {
    id: number,
    iconName: AppIconNames,
    tooltip: string
    onClick: () => void;
}

export const MenuBar = memo(() => {
    const dispatch = useDispatch();

    const windows = useSelector(selectOpenedWindows)
    const launchpadIsOpen = useSelector(selectLaunchpadIsOpen)

    function handleOpenLaunchpad() {
        dispatch(toggleLaunchpad(!launchpadIsOpen))
    }

    function handleOpenWindow(id: number, windowName: string) {
        return () => {
            dispatch(openWindow({
                id: id,
                name: windowName,
                size: {width: 920, height: 450}
            }))
        }
    }

    const icons: Icons[] = useMemo(() => [
        {id: 1, iconName: 'finder', tooltip: 'Finder', onClick: handleOpenWindow(1, 'Finder')},
        {id: 14, iconName: 'launchpad', tooltip: 'Launchpad', onClick: handleOpenLaunchpad},
        // {id: 2, iconName: 'activity_monitor', tooltip: 'Activity Monitor', windowName: 'Activity Monitor'},
        // {id: 3, iconName: 'app_store', tooltip: 'App Store', windowName: 'App Store'},
        // {id: 4, iconName: 'books', tooltip: 'Books', windowName: 'Books'},
        // {id: 5, iconName: 'calculator', tooltip: 'Calculator', windowName: 'Calculator'},
        {id: 6, iconName: 'discord', tooltip: 'Discord', onClick: handleOpenWindow(6, 'Discord')},
        // {id: 7, iconName: 'facebook', tooltip: 'Facebook', windowName: 'Facebook'},
        // {id: 8, iconName: 'github', tooltip: 'Github', windowName: 'Github'},
        // {id: 9, iconName: 'google_chrome', tooltip: 'Google Chrome', windowName: 'Google Chrome'},
        // {id: 10, iconName: 'instagram', tooltip: 'Instagram', windowName: 'Instagram'},
        // {id: 11, iconName: 'notes', tooltip: 'Notes', windowName: 'Notes'},
        // {id: 12, iconName: 'photos', tooltip: 'Photos', windowName: 'Photos'},
        // {id: 13, iconName: 'qr_encoder', tooltip: 'Qr Encoder', windowName: 'Qr Encoder'},
        // {id: 15, iconName: 'safari', tooltip: 'Safari', windowName: 'Safari'},
        // {id: 16, iconName: 'settings', tooltip: 'Settings', windowName: 'Settings'},
        // {id: 17, iconName: 'spotify', tooltip: 'Spotify', windowName: 'Spotify'},
        {id: 18, iconName: 'telegram', tooltip: 'Telegram', onClick: handleOpenWindow(18, 'Telegram')},
        // {id: 19, iconName: 'terminal', tooltip: 'Terminal', windowName: 'Terminal'},
        // {id: 21, iconName: 'twitter', tooltip: 'Twitter', windowName: 'Twitter'},
        // {id: 22, iconName: 'whatsapp', tooltip: 'Whatsapp', windowName: 'Whatsapp'},
        {id: 23, iconName: 'xcode', tooltip: 'Xcode', onClick: handleOpenWindow(23, 'Xcode')},
        // {id: 24, iconName: 'youtube', tooltip: 'Youtube', windowName: 'Youtube'},
        {id: 25, iconName: 'trash', tooltip: 'Trash', onClick: handleOpenWindow(25, 'Trash')},
    ], [handleOpenWindow]);

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
                                    onClick={icon.onClick}
                                />
                            </Tooltip>
                        )
                    })}
                </div>
            </div>
        </div>
    )
})
