import React, {memo, useMemo, useCallback} from 'react';
import {CSSTransition} from "react-transition-group";
import {useDispatch, useSelector} from "react-redux";

import classes from './Launchpad.module.scss'
import {getIconByName} from "../../utils/appIcons";
import {selectLaunchpadIsOpen} from "../../store/selectors/launchpad.selector";
import {toggleLaunchpad} from "../../store/reducers/launchpad.reducer";

function noop() {
}

export const Launchpad = memo(() => {
    const dispatch = useDispatch();
    const isOpen = useSelector(selectLaunchpadIsOpen)

    const handleOutSideClick = useCallback(() => {
        dispatch(toggleLaunchpad(false))
    }, [])

    const apps = useMemo(() => {
        return [
            {id: 1, iconName: getIconByName('finder'), tooltip: 'Finder', onClick: noop},
            {id: 14, iconName: getIconByName('launchpad'), tooltip: 'Launchpad', onClick: noop},
            {id: 2, iconName: getIconByName('activity_monitor'), tooltip: 'Activity Monitor', onClick: noop},
            {id: 3, iconName: getIconByName('app_store'), tooltip: 'App Store', onClick: noop},
            {id: 4, iconName: getIconByName('books'), tooltip: 'Books', onClick: noop},
            {id: 5, iconName: getIconByName('calculator'), tooltip: 'Calculator', onClick: noop},
            {id: 6, iconName: getIconByName('discord'), tooltip: 'Discord', onClick: noop},
            {id: 7, iconName: getIconByName('facebook'), tooltip: 'Facebook', onClick: noop},
            {id: 8, iconName: getIconByName('github'), tooltip: 'Github', onClick: noop},
            {id: 9, iconName: getIconByName('google_chrome'), tooltip: 'Google Chrome', onClick: noop},
            {id: 10, iconName: getIconByName('instagram'), tooltip: 'Instagram', onClick: noop},
            {id: 11, iconName: getIconByName('notes'), tooltip: 'Notes', onClick: noop},
            {id: 12, iconName: getIconByName('photos'), tooltip: 'Photos', onClick: noop},
            {id: 13, iconName: getIconByName('qr_encoder'), tooltip: 'Qr Encoder', onClick: noop},
        ]
    }, [])


    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames={{
                enter: classes.enter,
                enterActive: classes.enterActive,
                exit: classes.exit,
                exitActive: classes.exitActive,
            }}
            mountOnEnter={true}
            unmountOnExit={true}
        >
            <div className={classes.launchpad} onClick={handleOutSideClick}>
                <div className={classes.searchBox}>
                    <input type="text" placeholder={'Search'} className={classes.searchInput}/>
                </div>

                <div className={classes.apps}>
                    {apps.map(app => {
                        return (
                            <div className={classes.app}>
                                <span className={classes.appIcon}>
                                    <img src={app.iconName} alt={app.iconName}/>
                                </span>
                                <span className={classes.appTitle}>{app.tooltip}</span>
                            </div>
                        )
                    })}

                </div>
            </div>
        </CSSTransition>
    )
})
