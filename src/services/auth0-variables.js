export const AUTH_CONFIG = {
  domain: 'rwdavisx.auth0.com',
  clientID: 'byrszCN1gQ7EVwxPzF1HtdbzsncX2KOT',
  callbackUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'http://rwdavisx.com/callback'
};