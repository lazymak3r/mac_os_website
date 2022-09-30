import React from 'react';

import classes from './App.module.scss';
import {TopBar} from "./components/TopBar/TopBar";
import {MenuBar} from "./components/MenuBar/MenuBar";
import {DraggableArea} from "./components/DraggableArea/DraggableArea";

function App() {
    return (
        <div className={classes.fira}>
            <TopBar/>
            <DraggableArea/>
            <MenuBar/>
        </div>
    );
}

export default App;
