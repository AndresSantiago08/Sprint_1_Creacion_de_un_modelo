const UserService = require('./../../app/services/UserService')

describe('Test for UserService', () => {
    test('Sprint 2 R-1: Create a new user using the UserService class', () => {
        const User = UserService.create(1, "AndresSantiag08", "Andrés");

        expect(User.userName).toBe("AndresSantiag08");
        expect(User.name).toBe("Andrés");
        expect(User.id).toBe(1);
        expect(User.bio).not.toBeUndefined();
    })
})