import React, {memo, useMemo, useState, useCallback, FC} from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";

import classes from "./Window.module.scss";
import {closeWindow, setActiveTab} from "../../store/reducers/window.reducer";
import {selectActiveWindow} from "../../store/selectors/window.selector";
import {WindowButton} from "../WindowButton/WindowButton";

export interface WindowProps {
    id: number;
    name: string,
    size: { width: number, height: number }
}

export const Window: FC<WindowProps> = memo(({id, name, size}) => {
    const dispatch = useDispatch();
    const activeWindow = useSelector(selectActiveWindow);

    const [offset, setOffset] = useState<{ x: number, y: number }>({y: 0, x: 0})
    const [position, setPosition] = useState<{ x: number, y: number }>({y: 100, x: 200})

    const style = useMemo(() => ({
        width: size.width,
        height: size.height,
        transform: `translateX(${position.x}px) translateY(${position.y}px)`
    }), [position]);

    const onWindowMouseDownHandler = useCallback((event: React.MouseEvent) => {
        dispatch(setActiveTab({id, name, size}));
    }, [])

    const onMouseDownHandler = useCallback((event: React.MouseEvent) => {
        const element = event.currentTarget.closest(`.${classes.window}`);
        if (element) {
            const rect = element.getBoundingClientRect();
            const root = document.documentElement;
            const x = event.clientX - rect.left - root.scrollLeft;
            const y = event.clientY - rect.top - root.scrollTop;
            setOffset({y, x})
        }
    }, [])

    const onDragStartHandler = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.currentTarget.style.cursor = 'default';
        const span = document.createElement('span');
        span.style.display = 'none'
        event.dataTransfer.setDragImage(span, 0, 0);
        return false;
    }, [])

    const onDragOverHandler = useCallback((event: React.DragEvent) => {
        event.preventDefault();
    }, [offset])

    const onDragHandler = useCallback((event: React.DragEvent) => {
        const x = event.clientX - offset.x;
        const y = event.clientY - offset.y;

        setPosition({
            y: Math.max(25, Math.min(y, (window.innerHeight - size.height))),
            x: Math.max(0, Math.min(x, (window.innerWidth - size.width)))
        })
    }, [offset])

    const dragHandlers = useMemo(() => {
        return {
            onMouseDown: onMouseDownHandler,
            onDragStart: onDragStartHandler,
            onDragOver: onDragOverHandler,
            onDrag: onDragHandler,
            draggable: true,
        }
    }, [onMouseDownHandler, onDragOverHandler, onDragHandler])

    const exitHandler = useCallback(() => {
        dispatch(closeWindow({id}))
    }, [])

    const minimizeHandler = useCallback(() => {
    }, [])

    const resizeHandler = useCallback(() => {
    }, [])

    return (
        <div
            style={style}
            onMouseDown={onWindowMouseDownHandler}
            className={classNames([classes.window, {[classes.active]: id === activeWindow?.id}])}
        >
            <div className={classes.sideBar}>
                <div
                    {...dragHandlers}
                    className={classes.sideBarHeader}
                >
                    <div className={classes.sidebarHeaderActions}>
                        <WindowButton onClick={exitHandler} type={'exit'} className={classes.action}/>
                        <WindowButton onClick={minimizeHandler} type={'minimize'} className={classes.action}/>
                        <WindowButton onClick={resizeHandler} type={'resize'} className={classes.action}/>
                    </div>
                </div>
                <div className={classes.sideBarBody}>

                </div>
            </div>
            <div className={classes.main}>
                <div
                    {...dragHandlers}
                    className={classes.mainHeader}
                >

                </div>
                <div className={classes.mainBody}></div>
            </div>
        </div>
    )
})
