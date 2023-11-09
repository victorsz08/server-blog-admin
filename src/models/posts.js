import Sequelize, { Model } from "sequelize";


export class Posts extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      image: Sequelize.TEXT,
      category: Sequelize.ENUM("redPill","development","fashionMen"),
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

