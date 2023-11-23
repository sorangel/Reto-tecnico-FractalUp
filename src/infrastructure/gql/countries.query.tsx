import { DocumentNode, gql } from "@apollo/client";

export const COUNTRIES_QUERY: DocumentNode = gql`
  query {
    countries {
      awsRegion
      capital
      code
      continent {
        code
        name
      }
      currencies
      currency
      emoji
      emojiU
      languages {
        code
        name
        native
        rtl
      }
      name(lang: "es")
      native
      phone
      phones
      states {
        #code
        country {
          capital
          currency
        }
        name
      }
      #subdivisions {
      #  emoji
      #}
    }
  }
`;
