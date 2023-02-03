import React from "react";
import Navbar from "./components/Navbar";
import Workout from "./components/Workout";

import {
  ApolloClient,
  InmemoryCache,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/clinet/link/context';

const httpLink = createHttpLink({
  url: '/graphql'
})

const authLink = setContext((_, {Headers}) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authlink.concat(httpLink),
  cache: new InMemoryCache()
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <main class ="flex">
        <Navbar />
        <Workout />
      </main>
    </ApolloProvider>
  );
}