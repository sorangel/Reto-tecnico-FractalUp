import { DocumentNode, gql } from "@apollo/client";

export const CONTINENTS_QUERY: DocumentNode = gql`
    query {
        continents {
            code
            name
        }
    }
`;
