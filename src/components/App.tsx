
import * as React from "react";
import { Route, Link } from "react-router-dom";

import { Home } from "./Home";
import { Detail } from "./Detail";

export class App extends React.Component<App.Props, App.State> {
    
    render() {
        return (
            <div className="container">
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route path="/petition/:id" component={Detail} />
                </main>
            </div>
        );
    }
}

export namespace App {
    export interface Props {
        
    };
    export interface State {
    }
}