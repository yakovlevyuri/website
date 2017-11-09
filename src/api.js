import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { BASE_URL } from './appConfig';

export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: BASE_URL }),
  cache: new InMemoryCache(),
});
