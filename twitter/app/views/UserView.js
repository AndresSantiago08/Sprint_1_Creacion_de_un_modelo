const UserService = require("./../../app/services/UserService");

class UserView{    
    static createUser(payload){    
        // Valida que al enviar en el `payload` un valor `null`, 
        // obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
        if (payload == null){
            return {error: 'payload no existe'}
        }
        // Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. 
        // Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
        else if (payload.userName == null || payload.name == null || payload.id == null){
            return {error: "necesitan tener un valor válido"}
        }
        else{
            return new UserService.create(payload.id, payload.userName, payload.name)
        }
    }
}

module.exports = UserView;