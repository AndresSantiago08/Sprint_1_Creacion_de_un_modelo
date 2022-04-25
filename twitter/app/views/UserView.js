const UserService = require("./../../app/services/UserService");

class UserView{    
    static createUser(payload){    

        if (payload == null){
            return {error: 'payload no existe'}
        }
        else if (payload.userName == null || payload.name == null || payload.id == null){
            return {error: "necesitan tener un valor válido"}
        }
        else if (payload.userName !== 'string' || payload.name !== 'string' || payload.userName === "" || payload.name === "" ||
            payload.id === "" || payload.id === 'string')
        {
            return {error: "necesitan tener un valor válido"}
        }
        else{
            return UserService.create(payload.id, payload.userName, payload.name)
        }
    }
}

module.exports = UserView;