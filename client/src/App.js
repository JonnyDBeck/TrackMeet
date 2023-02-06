import React from "react";
import Router from "./router";

function App() {
  return <Router />;
}

export default App;



// import React from "react";
// import Navbar from "./components/Navbar";
// import Workout from "./components/Workout";
// import Router from "./router";


// import {
//   ApolloClient,
//   InmemoryCache,
//   ApolloProvider,
//   createHttpLink,
//   InMemoryCache
// } from '@apollo/client';

// import { setContext } from "@apollo/client/link/context";

// const httpLink = createHttpLink({
//   url: '/graphql'
// })

// const authLink = setContext((_, {Headers}) => {
//   const token = localStorage.getItem('id_token');

//   return {
//     headers: {
//       ...Headers,
//       authorization: token ? `Bearer ${token}` : ''
//     }
//   }
// })

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// })

// export default function App() {
//   return (
//     <ApolloProvider client={client}>
//       <main class ="flex">
//         <Navbar />
//         <Workout />
//       </main>
//     </ApolloProvider>
//   );
// }

