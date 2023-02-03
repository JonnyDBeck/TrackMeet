const {gql} = require('apollo-server-express');

//placeholder is holding the place of future models
const typeDefs = gql`
    scalar Date

    type MyType {
        created: Date
    }

    type Exercise {
        _id: ID
        name: String
        calper: Float
        measure: String
        tags: [String]
    }

    type Track {
        _id: ID
        exercise: Exercise
        time: Date
        amount: Float
    }

    type Profile {
        _id: ID
        username: String
        password: String
        email: String
        tracks: [Track]
    }

    type Auth {
        token: ID
        user: Profile
    }

    type Query {
        getAllExercises: [Exercise]
        getAllTracks: [Track]
        getAllProfiles: [Profile]
        getProfileByUsername(username: String!): Profile
        getProfileByEmail(email: String!): Profile
        getExerciseByName(name: String!): Exercise
    }

    type Mutation {
        addProfile(username: String!, password: String!, email: String!): Profile
        addTrack(profileUsername: String!, exerciseName: String!, time: Date!, amount: Float!): Track
        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;