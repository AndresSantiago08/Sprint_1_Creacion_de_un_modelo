const User = require('./../../app/models/User');

describe("Unit test for User class", () =>{
    test("Use getter functions", () => {
        //Llamando a la clase User
        const NewUser = new User(1, "nothing", "Andrés", "No bio")

        NewUser.setUserName = "AndresSantiag08";
        NewUser.setBio = "Bio";
        //Comparando resultados
        expect(NewUser.userName).toBe("AndresSantiag08");
        expect(NewUser.bio).toBe("Bio");
    })
})