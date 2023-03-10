const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const {typeDefs, resolvers} = require("./schema");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth")
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const path = require("path");


const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();

app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

if (process.env.NODE_ENV = 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
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