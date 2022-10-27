import { gql } from "@apollo/client";

export const Q__MESSAGES = gql`
  query {
    messages {
      id
      content
      updatedAt
      createdAt
    }
  }
`;
