import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { setContext } from "@apollo/client/link/context";
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
   uri: '/graphql',
})

const authLink = setContext((_req, { header }) => {
   const token = localStorage.getItem("id_token")
   return { headers: { ...header, authorization: token ? `Bearer ${token}` : "" } }
})

 const client = new ApolloClient({
   link: authLink.concat(httpLink),
   cache: new InMemoryCache()
});


function App() {

  return (
    <ApolloProvider client={client}>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/login"
              element={<Login /> }
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </ApolloProvider>
  );
}

export default App;

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

