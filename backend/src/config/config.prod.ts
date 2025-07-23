// Config production environment
export default () => ({
  mongo: {
    host: process.env.MONGO_DB
  },
});