
declare namespace Store {
    export type Petitions = StorePetitionCache[];
}

interface StorePetitionCache {
    expire_at_unix: number;
    petition: Petition;
}