
import * as React from "react";
import { Link } from "react-router-dom";
import * as moment from "moment";

export class PetitionRow extends React.Component<PetitionRow.Props, PetitionRow.State> {
    constructor(props: PetitionRow.Props) {
        super(props);
        this.state = {
            attr: props.petition.attributes
        };
    }
    
    getAdditionalDetails() {
        let additional = null;
        if (this.state.attr.additional_details) {
            additional = <p>{this.state.attr.additional_details}</p>
        }
        return additional;
    }
    
    getStatus() {
        let status = null;
        if (this.state.attr.debate_outcome_at) {
            status = "Debated";
        }
        else if (this.state.attr.rejected_at) {
            status = "Rejeceted";
        }
        else if (this.state.attr.closed_at) {
            status = "Closed";
        }
        else {
            status = "Open";
        }
        return status;
    }
    
    formatDate(date: Date) {
        return moment(date).format("ddd, Do MMM YYYY")
    }
    
    render() {
        return (
            <div className="row petition-row">
                <div className="col-12">
                    <hr />
                </div>
                <div className="col-12">
                    <h2><Link to={`/petition/${this.props.petition.id}`}>{this.state.attr.action}</Link></h2>
                    <p>{this.state.attr.background}</p>
                    {this.getAdditionalDetails()}
                </div>
                <div className="col-12 col-md-6">
                    <small>{this.formatDate(this.state.attr.open_at)}</small>
                </div>
                <div className="col-12 col-md-6">
                    <small>Status: {this.getStatus()}</small>
                </div>
            </div>
        )
    }
}

export namespace PetitionRow {
    export interface Props {
        petition: Petition.Data & Petition.Links
    }
    export interface State {
        attr: Petition.Data.Attributes;
    }
}