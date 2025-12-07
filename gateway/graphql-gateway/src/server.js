import { createServer } from 'http';
import { createYoga, createSchema } from 'graphql-yoga';
import fetch from 'node-fetch';

const typeDefs = /* GraphQL */ `
  type Booking {
    id: ID!
    roomId: String!
    title: String!
    startTime: String!
    endTime: String!
  }
  type Query {
    health: String!
    bookingsToday: [Booking!]!
  }
  input CreateBookingInput {
    roomId: String!
    title: String!
    startTime: String!
    endTime: String!
  }
  type Mutation {
    createBooking(input: CreateBookingInput!): Booking!
  }
`;

const resolvers = {
  Query: {
    health: () => 'ok',
    bookingsToday: async () => {
      // Placeholder: stitch from reporting/task/booking services
      return [];
    }
  },
  Mutation: {
    createBooking: async (_, { input }) => {
      const res = await fetch('http://booking-service:8080/api/v1/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
      });
      if (!res.ok) throw new Error(`Booking create failed: ${res.status}`);
      const json = await res.json();
      return json;
    }
  }
};

const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
});

const server = createServer(yoga);
server.listen(4000, () => {
  console.log('GraphQL Gateway listening on 4000');
});