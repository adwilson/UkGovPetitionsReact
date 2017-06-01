
import * as React from "react";
import { RouteComponentProps } from "react-router";

export class Detail extends React.Component<Detail.Props, Detail.State> {
    render() {
        return (
            <h2>{this.props.match.params.id}</h2>
        )
    }
}

export namespace Detail {
    export interface Props extends RouteComponentProps<{ id: number }> {
        
    }
    export interface State {
        
    }
}