import React, {memo, FC} from 'react';
import classes from "./TopBarButton.module.scss";
import classNames from "classnames";

interface TopBarButtonProps {
    isLogo?: boolean
    children: React.ReactNode
}

export const TopBarButton: FC<TopBarButtonProps> = memo(({children, isLogo}) => {
    return (
        <div className={classNames([classes.topBarButtonContainer, {[classes.isLogo]: isLogo}])}>
            <span className={classes.topBarButtonText}>{children}</span>
        </div>
    )
})
