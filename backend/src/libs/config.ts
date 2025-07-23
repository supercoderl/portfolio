const baseHosts = {
  // development
  development: {
    baseHost: 'http://localhost:3000/',
    uploadPath: 'public/',
    domain: 'www.supercoderle.com',
  },

  // production
  production: {
    baseHost: 'http://app.api',
    uploadPath: 'public/',
    domain: 'www.supercoderle.com',
  },
};

export { baseHosts };
