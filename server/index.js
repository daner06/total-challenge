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
    marketData(timeFrame: String): [marketDataItem]
  }
`;

const resolvers = {
  Query: {
    marketData: () => marketData,
  },
};

// 'https://query1.finance.yahoo.com/v8/finance/chart/TTE',
// 'https://random-data-api.com/api/v2/users'
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
