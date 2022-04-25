const User = require('./../models/User')

class UserService{
    static create(id, userName, name){
        return new User(id, userName, name, "Sin bio")
    }

    static getInfo(User){
        const lista = [User.id, User.userName, User.name, "Sin bio"];
        return lista;
    }
}



module.exports = UserService;