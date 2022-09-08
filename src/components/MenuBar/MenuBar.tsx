import React, {memo} from 'react';

import classes from './MenuBar.module.scss'
import {Tooltip} from "../Tooltip/Tooltip";
import {BarIcon} from "../BarIcon/BarIcon";

export const MenuBar = memo(() => {
    return (
        <div className={classes.menuBarContainer}>
            <div className={classes.menuBar}>
                <BarIcon iconName={'finder'}/>
                <BarIcon iconName={'activity_monitor'}/>
                <BarIcon iconName={'app_store'}/>
                <BarIcon iconName={'books'}/>
                <BarIcon iconName={'calculator'}/>
                <BarIcon iconName={'discord'}/>
                <BarIcon iconName={'facebook'}/>
                <BarIcon iconName={'github'}/>
                <Tooltip text={'Google Chrome'}>
                    <BarIcon iconName={'google_chrome'}/>
                </Tooltip>
                <BarIcon iconName={'instagram'}/>
                <BarIcon iconName={'notes'}/>
                <BarIcon iconName={'photos'}/>
                <BarIcon iconName={'qr_encoder'}/>
                <BarIcon iconName={'launchpad'}/>
                <BarIcon iconName={'safari'}/>
                <BarIcon iconName={'settings'}/>
                <BarIcon iconName={'spotify'}/>
                <BarIcon iconName={'telegram'}/>
                <BarIcon iconName={'terminal'}/>
                <BarIcon iconName={'twitter'}/>
                <BarIcon iconName={'whatsapp'}/>
                <BarIcon iconName={'xcode'}/>
                <BarIcon iconName={'youtube'}/>
                <BarIcon iconName={'trash'}/>
            </div>
        </div>
    )
})