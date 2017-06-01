
import { expect } from "chai";

import { 
    addOrReplacePetition, removePetition, 
    ADD_OR_REPLACE_PETITION, REMOVE_PETITION 
} from "../../../src/store/actions/petitions";
import create_petition from "../../test-util/create-petition";

describe("petition actions", () => {
    it("returns ADD type and petition", () => {
        const id = 19;
        const petition = create_petition();
        petition.data.id = id;
        const output = addOrReplacePetition(petition);
        expect(output.type).to.equal(ADD_OR_REPLACE_PETITION);
        expect(output.petition.data.id).to.equal(petition.data.id);
    });
    
    it("returns REMOVE type and petition ID", () => {
        const id = 29;
        const output = removePetition(id);
        expect(output.type).to.equal(REMOVE_PETITION);
        expect(output.petitionId).to.equal(id);
    })
})