import React, {memo, cloneElement, useRef, useMemo, useEffect, useCallback, Children, FC} from 'react';
import classNames from "classnames";

import classes from "./Dropdown.module.scss";
import ReactDOM from "react-dom/client";

interface IOptions {
    id: number | string,
    label: string,
    separator?: boolean
    onClick?: () => void;
    disabled?: boolean
}

interface TopBarButtonProps {
    show: boolean,
    options: IOptions[],
    children: React.ReactNode,
    width: number,
    className?: string
    offset?: {
        top?: number,
        left?: number,
    },
    onClose?: () => void;
}

export const Dropdown: FC<TopBarButtonProps> = memo(({show, width, options, onClose, offset, children}) => {
    // @ts-ignore
    let firstChildRef: HTMLElement = useRef();
    let wrapperRef = useRef<HTMLDivElement | null>(null);
    const firstChild = useMemo(() => Children.toArray(children)[0], [children]);

    const optionClickHandler = useCallback((callback?: () => void) => {
        onClose?.()
        callback?.();
    }, [onClose])

    const wrapperContent = useMemo(() => {
        return (
            <div className={classes.list}>
                {options.map((option) => {
                    return (
                        <React.Fragment key={option.id}>
                            <div
                                key={option.id}
                                onClick={() => optionClickHandler(option.onClick)}
                                className={classes.option}
                            >
                                {option.label}
                            </div>
                            {option.separator && <div className={classes.separator}/>}
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }, [])

    const isInViewport = (el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)

        );
    }

    const clickOutsideHandler = useCallback((event: any) => {
        if (
            !firstChildRef.contains(event.target) &&
            wrapperRef.current && !wrapperRef.current.contains(event.target)
        ) {
            onClose?.()
        }
    }, [onClose])

    useEffect(() => {
        let wrapper: HTMLDivElement | null = null;
        if (show && firstChildRef) {
            const {scrollX, scrollY} = window;
            const viewportOffset = firstChildRef?.getBoundingClientRect();
            if (viewportOffset) {
                const topPos = viewportOffset.top + scrollX;
                const leftPos = viewportOffset.left + scrollY;
                const offsetLeft = offset?.left || 0;
                const offsetTop = offset?.top || 2;

                wrapper = Object.assign(document.createElement('div'), {
                    className: classes.dropdown
                })
                wrapper.style.position = 'fixed';
                wrapper.style.top = `${topPos + viewportOffset.height + offsetTop}px`;
                wrapper.style.left = `${leftPos + offsetLeft}px`;
                if (width) wrapper.style.width = `${width}px`;
                wrapperRef.current = wrapper;

                const root = ReactDOM.createRoot(wrapper);
                root.render(wrapperContent);


                document.addEventListener("mouseup", clickOutsideHandler);
                document.body.appendChild(wrapper);

                if (!isInViewport(wrapper)) {
                    const rect = wrapper.getBoundingClientRect();
                    wrapper.style.transform = `translateX(calc(${-(rect.right - window.innerWidth) - 4}px))`
                }
            }
        }

        return () => {
            wrapper?.remove();
            document.removeEventListener("mouseup", clickOutsideHandler);
        }
    }, [show, wrapperContent])

    return cloneElement(firstChild as React.ReactElement, {ref: (ref: HTMLElement) => firstChildRef = ref})
})
