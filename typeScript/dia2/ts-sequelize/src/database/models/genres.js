module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genre', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      genre: DataTypes.STRING,
    },
      {
        underscored: true,
        timestamps: false,
      });
  
    return Genre;
  };