const {gql} = require('apollo-server-express');

//placeholder is holding the place of future models
const typeDefs = gql`

    scalar Date

    type Exercise {
        _id: ID,
        name: String,
        calper: Float,
        measure: String,
        tags: [String]
    }

    type Track {
        _id: ID,
        profile: Profile,
        exercise: Exercise,
        time: Date,
        amount: Float
    }

    type Profile {
        _id: ID,
        username: String,
        password: String,
        email: String,
        tracks: [Track],
        freinds: [Profile]
    }

    type Query {
        getAllExercises: [Exercise],
        getAllTracks: [Track],
        getAllProfiles: [Profile],
        getProfile(username: String!): Profile,
        getTrack(name: String!): Exercise,
    }

    type Mutation {
        addProfile(username: String!, password: String!, email: String!): Profile,
        addTrack(profile: Profile!, exercise: Exercise!, time: Date!, amount: Float!): Track
    }
`

module.exports = typeDefs;