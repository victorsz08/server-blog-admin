import Sequelize from 'sequelize';
import 'dotenv/config';

import {Users} from '../models/users.js'

import sequelize from '../config/sequelize.js';
import { Posts } from '../models/posts.js';

const models = [Users, Posts];


class Database {
  constructor() {
    this.connection = sequelize
    this.init()
    this.associate()
  }

  init() {
    models.forEach(model => model.init(this.connection))
  }

  associate() {
    models.forEach(model => {
      if(model.associate) {
        model.associate(this.connection.models)
      }
    })
  }

}

export default new Database();