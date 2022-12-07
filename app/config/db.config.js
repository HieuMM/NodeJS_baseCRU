module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "123456",
  DB: "test",
  PORT: 6868,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
