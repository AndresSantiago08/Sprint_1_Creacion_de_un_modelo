const User = require('./../../app/models/User');

describe("Unit test for User class", () =>{
    test(" Get date type in 'dateCreated' and 'lastUpdated'", () => {
        //Llamando a la clase User
        const NewUser = new User(1, "AndresSantiag08", "Andrés", "Bio")

        //Comparando resultados
        expect(NewUser.id).toBe(1);
        expect(NewUser.userName).toBe("AndresSantiag08");
        expect(NewUser.name).toBe("Andrés");
        expect(NewUser.bio).toBe("Bio");
        expect(NewUser.dateCreated).not.toBeUndefined();
        expect(NewUser.lastUpdated).not.toBeUndefined();
    })
})