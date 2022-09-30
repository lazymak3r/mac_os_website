import React, {memo} from 'react';

import classes from './TopBar.module.scss'
import {Time} from "../Time/Time";
import {TopBarButton} from "../TopBarButton/TopBarButton";
import {ReactComponent as WifiIcon} from '../../assets/svg/wifi.svg'

export const TopBar = memo(() => {
    return (
        <div className={classes.topBarContainer}>
            <div className={classes.topBarMain}>
                <TopBarButton isLogo></TopBarButton>
                <TopBarButton>Finder</TopBarButton>
                <TopBarButton>File</TopBarButton>
                <TopBarButton>Edit</TopBarButton>
                <TopBarButton>View</TopBarButton>
            </div>
            <div className={classes.topBarSecond}>
                <TopBarButton><WifiIcon fill={'white'}/></TopBarButton>
                <Time/>
            </div>
        </div>
    )
})
