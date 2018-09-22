const UserAuthenticationValidator = require('../../../../app/model/user/user-authentication.validator');
describe('user-authentication.validator', () => {
  describe('#validate', () => {
    it.each([
      { password: '123', email: 'testemail@gmail.com' },
      { password: '30words30words30words30words11', email: 'testEmail@yahoo.com' },
      { password: '30words30words30wor', email: 'test-.Email@yahoo.com' }
    ])('should return true for %o', (data) => {
      expect(UserAuthenticationValidator.validate(data)).toBe(true);
    });

    it.each([
      [{ password: '1', email: 'testemail@gmail.com' }, 'password'],
      [{ password: '30words30words30words30words112', email: 'a@t.com' }, 'password'],
      [{ password: '123', email: 'wrongemail' }, 'email']
    ])('should throw an error %o', (data, expectedResult) => {
      expect(() => UserAuthenticationValidator.validate(data)).toThrow(expectedResult);
    });
  });
});
