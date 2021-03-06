import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AppWrapper from "./Layout/AppWrapper";
import Login from "./pages/auth/login";

function App() {
    return (
        <div id="wrapper" className={"app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header"}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/" render={(props) => {
                        return <AppWrapper {...props} />
                    }}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
