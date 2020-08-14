module.exports = {
  HOST: process.env.HOST || "localhost",
  USER: process.env.USER || "root",
  PASSWORD: process.env.PASSWORD || "password",
  DB: process.env.DB || "db",
  dialect: "mysql",
  pool: {
    max: 30,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
