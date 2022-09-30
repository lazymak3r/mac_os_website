import React, {memo, FC} from 'react';

import classes from "./DraggableArea.module.scss";

interface DraggableArea {
    children: React.ReactNode
}

export const DraggableArea: FC<DraggableArea> = memo(({children}) => {
    return (
        <div className={classes.draggableArea}>
            {children}
        </div>
    )
})
