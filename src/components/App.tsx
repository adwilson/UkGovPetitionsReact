
import * as React from "react";
import * as ReactDOM from "react-dom";

export class App extends React.Component<App.Props, App.State> {
    render() {
        return <h1>Hello, {this.props.message.toUpperCase()}</h1>
    }
}

export namespace App {
    export interface Props {
        message: string;
    };
    export interface State {

    }
}