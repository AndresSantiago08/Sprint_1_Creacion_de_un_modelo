const UserService = require('./../../app/services/UserService');

class UserView{    

    static createUser(payload){   

        if (payload == null){
            const user = {id: "", userName: "", name: "", error: 'payload no existe'};
            return user
        }
        else if (payload.userName === "" || payload.name === "" || payload.id === "" || 
        payload.userName == null || payload.name == null || payload.id == null){
            const user = {id: "", userName: "", name: "", error: "necesitan tener un valor válido"};
            return user
        }
        else{
            const userS = UserService.create(payload.id, payload.userName, payload.name);
            const user = {id: userS.id, userName: userS.userName, name: userS.name, error: ""}
            return user
        }
    }
}

module.exports = UserView;
