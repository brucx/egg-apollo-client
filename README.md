# egg-apollo-client

Egg 的 Apollo GraphQL 客户端插件

https://github.com/brucx/egg-apollo-client

安装：

run

```
npm i egg-apollo-client --save
```

config/plugin.js

```
exports.apolloClient = {
  enable: true,
  package: 'egg-apollo-client',
};
```

config/config.default.js

```
  config.apolloClient = {
    uri: process.env.APOLLO_URI || 'http://localhost:8080/v1alpha1/graphql',
    headers: { 'X-SERVER-KEY': process.env.APOLLO_KEY || 'grHJHDoh#)*93f339f' },
  };
```

usage in controller or service

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

