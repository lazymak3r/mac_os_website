import React from 'react';

import classes from './App.module.scss';
import {MenuBar} from "./components/MenuBar/MenuBar";

function App() {
    return (
        <div className={classes.fira}>
            <MenuBar/>
        </div>
    );
}

export default App;
