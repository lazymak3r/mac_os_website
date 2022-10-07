import React, {memo, useMemo} from 'react';
import classNames from "classnames";

import classes from './BarIcon.module.scss'
import {AppIconNames, getIconByName} from "../../utils/appIcons";

interface Props {
    iconName: AppIconNames,
    opened?: boolean,
    className?: string,
    onClick?: () => void
}

export const BarIcon: React.FC<Props> = memo(({iconName, className, opened, onClick, ...props}) => {
    const iconSrc = useMemo(() => getIconByName(iconName), [iconName])

    return (
        <div className={classNames(classes.barIconContainer, className)} onClick={onClick} {...props}>
            <img src={iconSrc} alt={iconSrc} className={classes.barIcon}/>
            {opened && <div className={classes.dot}/>}
        </div>
    )
})
