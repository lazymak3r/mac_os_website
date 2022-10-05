import React from 'react';

import classes from './App.module.scss';
import {TopBar} from "./components/TopBar/TopBar";
import {MenuBar} from "./components/MenuBar/MenuBar";
import {DraggableArea} from "./components/DraggableArea/DraggableArea";
import {Window} from "./components/Window/Window";
import {useSelector} from "react-redux";
import {selectOpenedWindows} from "./store/selectors/window.selector";
import {NotificationContainer} from "./components/Notifications/NotificationContainer";

function App() {
    const windows = useSelector(selectOpenedWindows)


    return (
        <div className={classes.fira}>
            <TopBar/>
            <DraggableArea>
                {windows.map(wind => {
                    return <Window key={wind.id} id={wind.id} name={wind.name} size={wind.size}/>
                })}
            </DraggableArea>
            <MenuBar/>
            <NotificationContainer />
        </div>
    );
}

export default App;
