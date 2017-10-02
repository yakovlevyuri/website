import ApolloClient, { createNetworkInterface } from 'apollo-client';

import { BASE_URL } from './appConfig';

const networkInterface = createNetworkInterface({
  uri: BASE_URL,
});

export const apolloClient = new ApolloClient({
  networkInterface,
});
