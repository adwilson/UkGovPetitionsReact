
import { expect } from "chai";

import petitions from "../../../src/store/reducers/petitions";
import create_petition from "../../test-util/create-petition";

describe("petition reducers", () => {
    describe("add or replace petition", () => {
        it("adds new element when store empty", () => {
            const new_petition = create_petition();
            new_petition.data.id = 10;
            const orig_array: StorePetitionCache[] = [];
            const output = petitions(orig_array, {
                type: "ADD_OR_REPLACE_PETITION",
                petition: new_petition
            });
            expect(output.length).to.equal(1);
            expect(output === orig_array).to.be.false; // Did it make a new copy of array?
        });
        
        it("adds new element when petition has new ID", () => {
            const temp_existing_pet = create_petition();
            temp_existing_pet.data.id = 1;
            const existing_store_petition = {
                expire_at_unix: 1,
                petition: temp_existing_pet
            }
            const orig_array = [existing_store_petition];
            const new_petition = create_petition();
            new_petition.data.id = 2;
            const output = petitions(orig_array, {
                type: "ADD_OR_REPLACE_PETITION",
                petition: new_petition
            });
            expect(output.length).to.equal(2);
            expect(output === orig_array).to.be.false; // Did it make a new copy of array?
        }) ;
        
        it("replaces element where id is a match", () => {
            const other_id = 99, finder_id = 8;
            const other_petition = create_petition();
            other_petition.data.id = other_id;
            const finder_petition = create_petition();
            finder_petition.data.id = finder_id;
            const replica_petition = create_petition();
            replica_petition.data.id = finder_id;
            const existing = [other_petition, finder_petition].map(x => ({ expire_at_unix: 1, petition: x }));
            const output = petitions(existing, {
                type: "ADD_OR_REPLACE_PETITION",
                petition: replica_petition
            });
            expect(output.length).to.equal(2);
            expect(output[0].petition.data.id).to.equal(other_id);
            expect(output[1].petition.data.id).to.equal(finder_id);
            expect(output === existing).to.be.false; // Did it make a new copy of array?
        });
    });
    
    describe("remove petition", () => {
        it("removes a petition when an id matches", () => {
            const pet1_id = 6, pet2_id = 9;
            const petition1 = create_petition();
            petition1.data.id = pet1_id;
            const petition2 = create_petition();
            petition2.data.id = pet2_id;
            const existing = [petition1, petition2].map(x => ({ expire_at_unix: 1, petition: x }));
            const output = petitions(existing, {
                type: "REMOVE_PETITION",
                petitionId: pet1_id
            });
            expect(output.length).to.equal(1);
            expect(output[0].petition.data.id).to.equal(pet2_id);
            expect(output === existing).to.be.false; // Did it make a new copy of the array?
        });
    });
});

