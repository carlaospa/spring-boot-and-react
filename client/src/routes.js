import React from "react";

import { BrowserRouter, Route, Switch} from "react-router-dom";

import Login from './pages/login';
import Books from "./pages/books";
import NewBook from "./pages/newbook";

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/books" component={Books} />
                <Route path="/book/new/:bookId" component={NewBook} />
            </Switch>
        </BrowserRouter>

    );
}