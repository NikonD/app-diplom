// import { gql } from "@apollo/client";

import { gql } from "@apollo/client"

const USER = {
  session: gql`
    query session {
      session {
        id
        name
        role
      }
    }
  `
}

export { USER }