const User = require('./../../app/models/User');

describe("Unit test for User class", () =>{
    test("Use getter functions", () => {
        //Llamando a la clase User
        const NewUser = new User(1, "AndresSantiag08", "Andrés", "Bio")

        //Comparando resultados
        expect(NewUser.getUserName).toBe("AndresSantiag08");
        expect(NewUser.getBio).toBe("Bio");
        expect(NewUser.getDateCreated).not.toBeUndefined();
        expect(NewUser.getLastUpdated).not.toBeUndefined();
    })
})