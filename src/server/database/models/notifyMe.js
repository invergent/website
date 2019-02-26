const notifyMe = (sequelize, DataTypes) => {
  const NotifyMe = sequelize.define('NotifyMe', {
    email: {
      type: DataTypes.STRING
    }
  }, { freezeTableName: true });

  return NotifyMe;
};

export default notifyMe;
