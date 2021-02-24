const dotenv = require('dotenv').config();
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'Project Keystone';
const adapterConfig = { mongoUri: process.env.MONGO_URI, };

//Schema Files
const SweaterSchema = require('./lists/Sweaters');
const UserSchema = require('./lists/Users');

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET || 'chocolatechip',
  //needed to be added for successful deployment
  //https://github.com/keystonejs/keystone/issues/2042
  secureCookies: false
});

//Routing
keystone.createList('Sweater', SweaterSchema);
keystone.createList('User', UserSchema);

//add to line 42
const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identityField: 'email',
    secretField: 'password'
  }
})

module.exports = {
  keystone,
  apps: [new GraphQLApp(),
  new AdminUIApp({
    name: PROJECT_NAME,
    enableDefaultRoute: true,
    authStrategy
  })
  ],
  //needed to be added for successful deployment
  //https://github.com/keystonejs/keystone/issues/2042
  configureExpress: app => {
    app.set('trust proxy', 1)
  }
};
