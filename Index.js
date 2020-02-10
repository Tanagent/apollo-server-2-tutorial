const { ApolloServer, gql } = require('apollo-server');

const courses = [
    {
        title: 'Calculus',
        author: 'First Author',
        description: 'First Description',
        url: 'http://www.google.com/'
    },
    {
        title: 'Japanese',
        author: 'Second Author',
        description: 'Second Description',
        url: 'http://www.google.com/'
    },
    {
        title: 'Physics',
        author: 'Third Author',
        description: 'Third Description',
        url: 'http://www.google.com/'
    }
];

const typeDefs = gql`
    type Course {
        title: String,
        author: String,
        description: String,
        url: String
    }

    type Query {
        courses: [Course]
    }
`;

const resolvers = {
    Query: {
        courses: () => courses
    }
}

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) =>{
    console.log(`Server ready at ${url}`);
});