import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
mutation AddProfile($username: String!, $password: String!, $email: String!) {
    addProfile(username: $username, password: $password, email: $email) {
      _id
      username
      email
      password
    }
  }`

export const ADD_TRACK = gql`
mutation AddTrack($profileUsername: String!, $exerciseName: String!, $time: Date!, $amount: Float!) {
    addTrack(profileUsername: $profileUsername, exerciseName: $exerciseName, time: $time, amount: $amount) {
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

export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
}`