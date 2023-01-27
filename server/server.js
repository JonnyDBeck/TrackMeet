const express = require("express");
const PORT = process.env.PORT || 3001;
const { ApolloServer } = require("apollo-server-express");

const {typeDefs, resolvers} = require("./schema");
const db = require("./config/connection");

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

const startApolloServer = async(typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log("Running")
        })
    })
}


