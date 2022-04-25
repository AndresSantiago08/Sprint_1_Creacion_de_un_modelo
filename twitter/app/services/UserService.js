const User = require('./../models/User')

class UserService{
    static create(id, userName, name){
        return new User(id, userName, name, "Sin bio")
    }

    static getInfo(User){
        const list_f = [User.id, User.userName, User.name, "Sin bio"];
        return list_f;
    }

    static updateUserName(User, newUserName){
        return User.userName = newUserName;
    }

    static getAllUserNames([User1, User2, User3]){
        const list_f = [User1.userName, User2.userName, User3.userName];
        return list_f;
    }
}



module.exports = UserService;