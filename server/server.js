const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const {typeDefs, resolvers} = require("./schema");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth")


const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client"))
})

const startApolloServer = async(typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log("Running")
        })
    })
}

startApolloServer (typeDefs, resolvers);