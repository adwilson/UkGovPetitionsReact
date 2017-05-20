
/**
 * A UK Government Petition including a link to itself.
 */
interface Petition {
    links: Petition.Links,
    data: Petition.Data
}

/**
 * A List of UK Government petitions with links to go the next/prev pages.
 */
interface PetitionList {
    links: Petition.ListLinks;
    data: (Petition.Data & Petition.Links)[];
}

declare namespace Petition {
    
    /**
     * A petition's link to itself on the UK Government Petition site
     */
    interface Links {
        self: string;
    }
    
    /**
     * Links for browsing lists of petitions
     */
    interface ListLinks extends Links {
        first: string;
        last: string;
        next: string | null;
        prev: string | null
    }
    
    /**
     * The data part of a UK Government petition
     */
    interface Data {
        type: string; // TODO: String literals?
        id: number;
        attributes: Data.Attributes;
    }

    namespace Data {
        /**
         * The attributes of the data part of a UK Government petition
         */
        interface Attributes {
            action: string;
            background: string;
            additional_details: string;
            state: string; // TODO: String literals?
            signature_count: number;
            created_at: Date;
            updated_at: Date | null;
            open_at: Date;
            closed_at: Date | null;
            government_response_at: Date | null;
            scheduled_debate_date: Date | null;
            debate_threshold_reached_at: Date | null;
            rejected_at: Date | null;
            debate_outcome_at: Date | null;
            moderation_threshold_reached_at: Date | null;
            response_threshold_reached_at: Date | null;
            creator_name: string | null;
            rejection: Attributes.Rejection | null;
            government_response: Attributes.GovernmentResponse | null;
            debate: Attributes.Debate | null;
            signatures_by_country: Attributes.SignaturesByCountry[];
            signatures_by_constituency: Attributes.SignaturesByConstituency[];
        }

        namespace Attributes {
            /**
             * Attribute part for when a petition is rejected
             */
            interface Rejection {
                code: string; // TODO: String literals?
                details: string;
            }

            /**
             * Attribute part for when a petition has a government response 
             */
            interface GovernmentResponse {
                summary: string;
                details: string;
                created_at: Date;
                updated_at: Date | null;
            }

            /**
             * Attribute part for when a petition was debated
             */
            interface Debate {
                debated_on: string;
                transcript_url: string;
                video_url: string;
                overview: string;
            }

            /**
             * Attribute part for a country's signature count
             */
            interface SignaturesByCountry {
                name: string;
                code: string;
                signature_count: number;
            }

            /**
             * Attribute part for a UK constituency's signature count
             */
            interface SignaturesByConstituency {
                name: string;
                ons_code: string;
                mp: string | null;
                signature_count: number;
            }
        }
    }
}

