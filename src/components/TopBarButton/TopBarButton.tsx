import React, {memo, FC} from 'react';
import classNames from "classnames";

import classes from "./TopBarButton.module.scss";

interface TopBarButtonProps {
    isLogo?: boolean
    isFolder?: boolean
    children: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const TopBarButton: FC<TopBarButtonProps> = memo(({children, onClick, isLogo, isFolder}) => {
    return (
        <div
            onClick={onClick}
            className={classNames([classes.topBarButtonContainer, {[classes.isLogo]: isLogo}, {[classes.isFolder]: isFolder}])}
        >
            <span className={classes.topBarButtonText}>{children}</span>
        </div>
    )
})
