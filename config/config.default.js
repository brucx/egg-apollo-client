module.exports = appInfo => {
  const config = exports = {};

  config.apolloClient = {
    uri: process.env.APOLLO_URI || 'http://localhost:8080/v1alpha1/graphql',
    headers: { 'X-SERVER-KEY': process.env.APOLLO_KEY || 'grHJHDoh#)*93f339f' },
  };

  return config;
};
