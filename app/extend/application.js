const fetch = require('node-fetch');
const { createHttpLink } = require('apollo-link-http');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { default: ApolloClient } = require('apollo-client');
const gql = require('graphql-tag');

// https://www.apollographql.com/client/
const APOLLO = Symbol('Application#apollo');

module.exports = {
  get apollo() {
    return this[APOLLO] || (this[APOLLO] = new ApolloClient({
      link: createHttpLink({
        uri: this.config.apolloClient.uri,
        headers: this.config.apolloClient.headers,
        fetch,
      }),
      cache: new InMemoryCache(),
    }));
  },
  gql,
};
