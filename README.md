# egg-apollo-client

Egg 的 Apollo GraphQL 客户端插件

https://github.com/brucx/egg-apollo-client


config

```
  config.apolloClient = {
    uri: process.env.APOLLO_URI || 'http://localhost:8080/graphql',
    headers: { 'X-SERVER-Key': process.env.APOLLO_KEY || 'grHJHDoh#)*93f339f' },
  };
```

usage

```
  const { data: { users } } = await this.app.apollo.query({
    query: this.app.gql`
    {
      users(where: {username: {_eq: "${username}"}}, limit: 1) {
        id
      }
    }`,
  });
  console.log(users)
```

