const UserView = require('./../../app/views/UserView');

describe("Test for UserView", () => {
    test("S-3,R-1: Return an error object when try to create a new user with an null playload", () => {
        const payload = null;
        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/payload no existe/);
    })
})