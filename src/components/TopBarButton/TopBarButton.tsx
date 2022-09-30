import React, {memo, FC} from 'react';
import classes from "./TopBarButton.module.scss";
import classNames from "classnames";

interface TopBarButtonProps {
    isLogo?: boolean
    isFolder?: boolean
    children: React.ReactNode
}

export const TopBarButton: FC<TopBarButtonProps> = memo(({children, isLogo, isFolder}) => {
    return (
        <div
            className={classNames([classes.topBarButtonContainer, {[classes.isLogo]: isLogo}, {[classes.isFolder]: isFolder}])}>
            <span className={classes.topBarButtonText}>{children}</span>
        </div>
    )
})
