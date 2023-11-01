import Sequelize, { Model } from 'sequelize';



export class Users extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password_hash: Sequelize.STRING,
      role: Sequelize.ENUM("admin","manager","author")
    },{
      sequelize,
      tableName: "users"
    })
  }

  static associate(models) {
    this.hasMany(models.Posts, {
      as: 'user_post',
      foreignKey: "author"
    })
  }

}



