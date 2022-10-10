import React, {useState, useCallback} from 'react';
import {useSelector} from "react-redux";

import classes from './App.module.scss';
import {TopBar} from "./components/TopBar/TopBar";
import {MenuBar} from "./components/MenuBar/MenuBar";
import {Window} from "./components/Window/Window";
import {Launchpad} from "./components/Launchpad/Launchpad";
import {Preloader} from "./components/Preloader/Preloader";
import {DraggableArea} from "./components/DraggableArea/DraggableArea";
import {selectOpenedWindows} from "./store/selectors/window.selector";

function App() {
    const [isCompleted, setIsCompleted] = useState(false);
    const windows = useSelector(selectOpenedWindows)

    const onCompleteHandler = useCallback(() => {
        setIsCompleted(true)
    }, [])

    return (
        <Preloader isCompleted={isCompleted} onComplete={onCompleteHandler}>
            <div className={classes.fira}>
                <TopBar/>
                <DraggableArea>
                    {windows.map(wind => {
                        return <Window key={wind.id} id={wind.id} name={wind.name} size={wind.size}/>
                    })}
                </DraggableArea>
                <Launchpad/>
                <MenuBar/>
            </div>
        </Preloader>
    );
}

export default App;
