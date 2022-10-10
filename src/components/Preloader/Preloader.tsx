import React, {memo, useState, useEffect, FC, useCallback,} from 'react'

import classes from './Preloader.module.scss'
import appleIcon from '../../assets/svg/apple.svg'
import {Progress} from "../Progress/Progress";
import {CSSTransition} from "react-transition-group";

interface PreloaderProps {
    isCompleted: boolean,
    onComplete: () => void;
    children: React.ReactNode
}

export const Preloader: FC<PreloaderProps> = memo(({isCompleted, onComplete, children}) => {
        const [progress, setProgress] = useState<number>(0)

        const startTimer = useCallback(() => {
            const interval = setInterval(() => {
                setProgress((prev: number) => {
                    if (prev < 100) {
                        return prev + 1
                    } else {
                        clearInterval(interval)
                        setTimeout(() => {
                            onComplete();
                        }, 1000)
                    }
                    return prev
                })
            }, 15)
        }, [])

        useEffect(() => {
            startTimer()
        }, [isCompleted])

        return (
            <>
                <CSSTransition
                    in={!isCompleted}
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
                    <div className={classes.preloader}>
                        <img src={appleIcon} alt="apple" className={classes.logo}/>
                        <Progress value={progress} className={classes.progress}/>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={isCompleted}
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
                    {children}
                </CSSTransition>
            </>
        )
    }
)
