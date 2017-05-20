
import * as React from "react";
import { RouteComponentProps } from "react-router";
import "whatwg-fetch";

import { PetitionRow } from "./PetitionRow";

const hourglass = require("../static/hourglass.svg");

const listUrl = "https://petition.parliament.uk/petitions.json";

export class Home extends React.Component<Home.Props, Home.State> {
    constructor(props: Home.Props) {
        super(props);
        this.state = {
            hasLoadedList: false,
            petitionList: null
        }
    }
    
    componentDidMount() {
        fetch(listUrl).then(res => {
            return res.text();
        }).then<PetitionList>(txt => {
            return JSON.parse(txt, (key, value) => {
                if (typeof value === "string") {
                    var a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
                    }
                }
                return value;
            })
        }).then(petitionList => {
            this.setState({
                hasLoadedList: true,
                petitionList
            });
        })
    }
    
    render() {
        let content: JSX.Element | null = null;
        if (this.state.petitionList) {
            content = (
                <div>
                    {this.state.petitionList.data.map(d => <PetitionRow key={d.id} petition={d} />)}
                </div>
            )
        }
        else {
            content = (
                <div className="row">
                    <div className="col-12 centre">
                        <img src={hourglass} /> Loading Petitions
                    </div>
                </div> 
            )
        }
        return (
            content
        );
    }
}

export namespace Home {
    export interface Props extends RouteComponentProps<{}> {
        
    }
    export interface State {
        hasLoadedList: boolean;
        petitionList: PetitionList | null;
    }
}