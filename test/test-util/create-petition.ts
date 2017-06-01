
function create_petition(): Petition {
    return {
        links: {
            self: ""
        },
        data: {
            type: "",
            id: 0,
            attributes: {
                action: "",
                background: "",
                additional_details: "",
                state: "",
                signature_count: 0,
                created_at: new Date(),
                updated_at: null,
                open_at: new Date(),
                closed_at: null,
                government_response_at: null,
                scheduled_debate_date: null,
                debate_threshold_reached_at: null,
                rejected_at: null,
                debate_outcome_at: null,
                moderation_threshold_reached_at: null,
                response_threshold_reached_at: null,
                creator_name: null,
                rejection: null,
                government_response: null,
                debate: null,
                signatures_by_country: [],
                signatures_by_constituency: []
            }
        }
    }
}

export default create_petition;