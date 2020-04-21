module.exports = {
  MONGO_DB: process.env.MONGO_URL || 'mongodb://localhost:27017/home',
  SERVER_PORT: process.env.SERVER_PORT || 5000,
};