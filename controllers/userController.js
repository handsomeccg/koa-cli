const sequelize = require('../config/sequelize')
//先导入model
const userModel = require('../models/user');

//将导入的model传入sequelize对象
const UserObj = userModel(sequelize);

class UsersCtl {
    async addUser(ctx) {
        const {name, age, sex} = ctx.request.body
        const user = await UserObj.create({ name, age, sex });
        ctx.body = {
            code: 200,
            data: user
        }
    }
}

module.exports = new UsersCtl()