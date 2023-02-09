const { AuthenticationError } = require('apollo-server-express')
const { Profile, Track, Exercise} = require('../models')
const { signToken } = require('../utils/auth')
const { GraphQLScalarType } = require('graphql');

const resolvers = {
    Query: {
        getAllExercises: async () => {
            const result = await Exercise.find({});
            return result;
        },
        getAllTracks: async () => {
            const result = await Track.find({});
            return result;
        },
        getAllProfiles: async () => {
            const result = await Profile.find({});
            return result;
        },
        getProfileByUsername: async(args) => {
            const result = await Profile.findOne({username: args.username})
            return result;
        },
        getProfileByEmail: async(args) => {
            const result = await Profile.findOne({email: args.email})
            return result;
        },
        getExerciseByName: async(args) => {
            const result = await Exercise.findOne({name: args.name})
            return result;
        }
    },
    Mutation: {

        addProfile: async(parent, args) => {
            const profile = await Profile.create(args);
            const token = signToken(profile);

            return { token, profile};
        },
        addTrack: async(parent, args) => {
            const track = await Track.create({
                exercise: await Exercise.findOne({name: args.exerciseName}),
                time: args.time,
                amount: args.amount
            });
            const profile = await Profile.updateOne(
                {username: args.profileUsername},
                { $push: { tracks: track } },
                done
            );

            return { track, profile };
        },
        
        login: async(parent, { email, password }) => {
            const profile = await Profile.findOne({ email });

            if (!profile) {
                throw new AuthenticationError('Incorrect Credentials');
            }

            const correctPW = await Profile.findOne({ password });

            if (!correctPW) {
                throw new AuthenticationError('Incorrect Credentials')
            }

            const token = signToken(profile);
            return { token, profile };
        }
    },
    
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date Type for use between mongoose and gql',
        parseValue(value) {
            return new Date(value);
        },
        serialize(value) {
            return value.getTime();
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
            return parseInt(ast.value, 10); 
            }
            return null;
        },
    })
}

module.exports = resolvers;