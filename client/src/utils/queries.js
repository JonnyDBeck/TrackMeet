import { gql } from '@apollo/client';

export const GET_ALL_EXERCISES = gql`
{
    getAllExercises {
        _id
        name
        calper
        measure
        tags
    }
}`

export const GET_ALL_TRACKS = gql`
{
    getAllTracks {
      _id
      amount
      exercise {
        _id
        name
        calper
        measure
        tags
      }
      time
    }
}`

export const GET_ALL_PROFILES = gql`
{
    getAllProfiles {
      _id
      username
      email
      password
      tracks {
        _id
        amount
        exercise {
          _id
          name
          calper
          measure
          tags
        }
        time
      }
    }
  }`

export const GET_EXERCISE_BY_NAME = gql`
query GetExerciseByName($name: String!) {
    getExerciseByName(name: $name) {
      _id
      name
      calper
      measure
      tags
    }
  }`

export const GET_PROFILE_BY_EMAIL = gql`
query GetProfileByEmail($email: String!) {
    getProfileByEmail(email: $email) {
      _id
      username
      email
      password
      tracks {
        _id
        amount
        exercise {
          _id
          name
          calper
          measure
          tags
        }
        time
      }
    }
  }`

export const GET_PROFILE_BY_USERNAME = gql`
query GetProfileByUsername($username: String!) {
    getProfileByUsername(username: $username) {
        _id
        username
        email
        password
        tracks {
          _id
          amount
          exercise {
            _id
            name
            calper
            measure
            tags
          }
        }
      }
    }`

  