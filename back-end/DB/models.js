const sequelize = require("./mainDB");
const { DataTypes } = require("sequelize");

const User = sequelize.define("users", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});

const Review = sequelize.define("review", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  stars: { type: DataTypes.SMALLINT, allowNull: false },
  text: { type: DataTypes.TEXT, allowNull: false },
});

const Chat = sequelize.define("chat", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: false },
});

User.hasOne(Review);
Review.belongsTo(User);

User.hasOne(Chat);
Chat.belongsTo(User);

module.exports = {
  User,
  Review,
  Chat,
};
