// const { ApolloServer } = require('apollo-server');
// const mongoose = require('mongoose');

// const typeDefs = require('./graphql/typeDefs');
// const resolvers = require('./graphql/resolvers');

// // Create a new instance of ApolloServer
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// mongoose
//   .connect('mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to database');
//     // Call listen() method on server variable
//     server.listen({ port: 5050 }).then(({ url }) => {
//       console.log(`Server started at ${url}`);
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });



const { ApolloServer } = require('apollo-server');
require('dotenv').config();
const mongoose = require('mongoose');
const MONGODB = process.env.MONGO_URL;

// console.log(MONGODB);

// Apollo Server
// typeDefs: GraphQL Type Definitions
// resolvers: How do we resolve queries / mutations


const typeDefs = require('./graphql/typeDefs');

const resolvers = require('./graphql/resolvers');

 const server = new ApolloServer({typeDefs,resolvers});


mongoose.connect(MONGODB, {useNewUrlParser: true}).then(()=>{
    console.log("db connected");
    return server.listen({port:5000});
}).then((res)=>{
    console.log(`server running at ${res.url}`);
})