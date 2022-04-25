//Clase para requerimiento 2
class User {
    constructor(id, userName, name, bio){
        this.id = id;
        this.userName = userName;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }

    get getUserName(){
        return this.userName;
    }

    set setUserName(newUserName){
        this.userName = newUserName;
    }

    get getBio(){
        return this.bio;
    }

    set setBio(newBio){
        this.bio = newBio;
    }

    get getDateCreated(){
        return this.dateCreated;
    }

    get getLastUpdated(){
        return this.lastUpdated;
    }
}
module.exports = User;