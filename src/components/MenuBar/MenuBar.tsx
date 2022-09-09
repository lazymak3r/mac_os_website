import React, {memo, useMemo} from 'react';
import classNames from "classnames";

import classes from './MenuBar.module.scss'
import {Tooltip} from "../Tooltip/Tooltip";
import {BarIcon, IconName} from "../BarIcon/BarIcon";

interface Icons {
    id: number,
    iconName: IconName,
    tooltip: string
}

export const MenuBar = memo(() => {
    const icons: Icons[] = useMemo(() => [
        {id: 1, iconName: 'finder', tooltip: 'Finder'},
        {id: 2, iconName: 'activity_monitor', tooltip: 'Activity Monitor'},
        {id: 3, iconName: 'app_store', tooltip: 'App Store'},
        {id: 4, iconName: 'books', tooltip: 'Books'},
        {id: 5, iconName: 'calculator', tooltip: 'Calculator'},
        {id: 6, iconName: 'discord', tooltip: 'Discord'},
        {id: 7, iconName: 'facebook', tooltip: 'Facebook'},
        {id: 8, iconName: 'github', tooltip: 'Fithub'},
        {id: 9, iconName: 'google_chrome', tooltip: 'Google Chrome'},
        {id: 10, iconName: 'instagram', tooltip: 'Instagram'},
        {id: 11, iconName: 'notes', tooltip: 'Notes'},
        {id: 12, iconName: 'photos', tooltip: 'Photos'},
        {id: 13, iconName: 'qr_encoder', tooltip: 'Qr Encoder'},
        {id: 14, iconName: 'launchpad', tooltip: 'Launchpad'},
        {id: 15, iconName: 'safari', tooltip: 'Safari'},
        {id: 16, iconName: 'settings', tooltip: 'Settings'},
        {id: 17, iconName: 'spotify', tooltip: 'Spotify'},
        {id: 18, iconName: 'telegram', tooltip: 'Telegram'},
        {id: 19, iconName: 'terminal', tooltip: 'Terminal'},
        {id: 21, iconName: 'twitter', tooltip: 'Twitter'},
        {id: 22, iconName: 'whatsapp', tooltip: 'Whatsapp'},
        {id: 23, iconName: 'xcode', tooltip: 'Xcode'},
        {id: 24, iconName: 'youtube', tooltip: 'Youtube'},
        {id: 25, iconName: 'trash', tooltip: 'Trash'},
    ], []);

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
                                />
                            </Tooltip>
                        )
                    })}
                </div>
            </div>
        </div>
    )
})
