module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('Membership', {
    MembershipType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    }
  });

  return User;
};
