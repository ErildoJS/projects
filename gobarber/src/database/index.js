import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';

/** criando array com todos model da aplicacao */
const models = [User];
class Database {
  constructor() {
    this.init();
  }

  init() {
    /** conecta a base de dados e carrega os nossos models */
    this.connection = new Sequelize(databaseConfig);

    /** percorrendo cada um dos models */
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
