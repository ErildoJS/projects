import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    }); /* trechos de codigo que sao executados de forma automatic a baseados em accoes qu aconteçem no model */

    return this;
  }

  // metodo usado na sessioncontroller para verificar a senha se bate com a do db
  // esta comparando a senha que eu passei com a coluna password_hash onde ta a senha salva
  checkPassword(password) {
    // senha queo user esta tentando se autenticar
    // comparo a senha que esta tentando logar com a senah do campo password_hash
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
