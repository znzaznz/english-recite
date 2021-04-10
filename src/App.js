import WordTest from "./views/WordTest/WordTest";
import React from 'react';
import {Switch,Route} from "react-router-dom"
import './App.scss';
import WordInsert from "./views/WordInsert/WordInsert";
import NoPage from "./views/NoPage/NoPage";

function App() {
  return (
    <div>
        <Switch>
            <Route path={"/"} exact>
                <WordInsert/>
            </Route>
            <Route path={"/test"} exact>
                <WordTest/>
            </Route>
            <Route path={"/:url"}>
                <NoPage/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
