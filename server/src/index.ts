import { ApolloServer, gql } from 'apollo-server';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core';
import marketData from './data/marketData';

const typeDefs = gql`
  type marketDataItem {
    ticker: String!
    timeFrame: String!
    yLabel: String
    value: Float
  }

  type Query {
    marketDataAll: [marketDataItem]
    marketData(timeFrame: String): [marketDataItem]
  }
`;

const resolvers = {
  Query: {
    marketDataAll: () => marketData,
    marketData: (parent: any, args: any) => {
      const { timeFrame } = args;
      return marketData.filter((item) => item.timeFrame === timeFrame);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
