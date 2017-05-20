
import * as _ from "lodash";
import * as moment from "moment";
import { PetitionsActions, ADD_OR_REPLACE_PETITION, REMOVE_PETITION } from "../Actions/Petitions";

const cacheHours = 2;

function petitions(state: Store.Petitions = [], action: PetitionsActions) {
    switch (action.type) {
        case ADD_OR_REPLACE_PETITION:
            const copy = [...state];
            const found = _.find(copy, t => t.petition.data.id === action.petition.data.id);
            if (found) {
                // Replace
                found.expire_at_unix = moment(found.expire_at_unix).add(cacheHours, "hours").unix();
                found.petition = action.petition;
            } 
            else {
                // Add
                copy.push({
                    expire_at_unix: moment().add(cacheHours, "hours").unix(),
                    petition: action.petition
                });
            }
            return copy;
        case REMOVE_PETITION:
            const index = _.findIndex(state, t => t.petition.data.id === action.petitionId);
            if (index > -1) {
                return state.slice(index, index + 1);
            }
            return state;
        default: 
            return state;
    }
}

export default petitions;