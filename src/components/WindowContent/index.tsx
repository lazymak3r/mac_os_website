import React, {memo, useMemo, FC} from 'react';

import classes from './index.module.scss'
import {WINDOWS} from "../../constants";
import {Trash} from "./Trash/Trash";
import {Finder} from "./Finder/Finder";

interface WindowContent {
    id: number
}

export const WindowContent: FC<WindowContent> = memo(({id}) => {
    const contents = useMemo(() => ({
        [WINDOWS.Finder]: <Finder/>,
        [WINDOWS.Trash]: <Trash/>,
    }), [])

    return (
        <div className={classes.windowContent}>
            {contents[id]}
        </div>
    )
})
