import React, {forwardRef, FC} from 'react';
import classNames from "classnames";

import classes from "./TopBarButton.module.scss";

interface TopBarButtonProps {
    isLogo?: boolean
    isFolder?: boolean
    children: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const TopBarButton: FC<TopBarButtonProps> = forwardRef(({children, onClick, isLogo, isFolder}, ref: any) => {
    return (
        <div
            ref={ref}
            onClick={onClick}
            className={classNames([classes.topBarButtonContainer, {[classes.isLogo]: isLogo}, {[classes.isFolder]: isFolder}])}
        >
            <span className={classes.topBarButtonText}>{children}</span>
        </div>
    )
})
