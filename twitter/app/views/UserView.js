const UserService = require("./../../app/services/UserService");

class UserView{    
    static createUser(payload){    
        if (payload == null){
            return {error: 'payload no existe'}
        }
        else{
            return new UserService.create(payload.id, payload.userName, payload.name)
        }
    }
}

module.exports = UserView;