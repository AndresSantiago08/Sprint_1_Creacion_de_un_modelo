const User = require('./../../app/models/User');

describe("Unit test for User class", () =>{
    test("Create an User object", () => {
        // Creando el objeto 'NewUser' son la clase User
        const NewUser = User(1, "AndresSantiag08", "Andrés", "Bio", "dateCreated", "lastUpdated")

        //Comparando resultados
        expect(NewUser.id).toBe(1);
        expect(NewUser.userName).toBe("AndresSantiag08");
        expect(NewUser.name).toBe("Andrés");
        expect(NewUser.bio).toBe("Bio");
        expect(NewUser.dateCreated).toBe("dateCreated");
        expect(NewUser.lastUpdated).toBe("lastUpdated");
    })
})