
export const ADD_OR_REPLACE_PETITION = "ADD_OR_REPLACE_PETITION";
export const REMOVE_PETITION = "REMOVE_PETITION";

export function addOrReplacePetition(petition: Petition) {
    return { type: ADD_OR_REPLACE_PETITION, petition };
}

export function removePetition(petitionId: number) {
    return { type: REMOVE_PETITION, petitionId }
}

export type PetitionsActions = {
    type: "ADD_OR_REPLACE_PETITION",
    petition: Petition
} | {
    type: "REMOVE_PETITION",
    petitionId: number
};