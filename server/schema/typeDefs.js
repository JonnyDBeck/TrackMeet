const {gql} = require('apollo-server-express');

//placeholder is holding the place of future models
const typeDefs = gql`
    type Placeholder {
        _id: ID
        name: String
    }

    type Query {
        getAllPlaceholder: [Placeholder]
    }

    type Mutation {
        addPlaceholder(name: String!): Placeholder
    }
`