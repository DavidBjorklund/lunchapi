module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    name: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    favourites: {
      type: Sequelize.STRING,
      defaultValue: ':'
    },
    mode: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    school: {
      type: Sequelize.ENUM({
        values: ['vgy', 'init']
      })
    }
  });

  return User;
};
