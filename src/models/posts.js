import Sequelize, { Model } from "sequelize";


export class Posts extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      content: Sequelize.TEXT,
      author: Sequelize.INTEGER
    },{
      sequelize,
      tableName: "posts"
    })
  }

  static associate(models) {
    this.belongsTo(models.Users, {
      foreignKey: "author",
      as: "user_post"
    })
  }
}

