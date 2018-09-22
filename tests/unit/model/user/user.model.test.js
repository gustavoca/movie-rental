const User = require('../../../../app/model/user/user.model');

describe('User', () => {
  describe('#constructor', () => {
    it('should create a user using the initial params', () => {
      const userRawData = {
        id      : '1',
        name    : 'test',
        password: 'pass',
        email   : 'email',
        isAdmin : false
      }
      const user = new User(userRawData);
      expect(user).toMatchObject(userRawData);
    });

    it('should default isAdmin to false in case paramter is not passed', () => {
      const userRawData = {
        id      : '1',
        name    : 'test',
        password: 'pass',
        email   : 'email'
      }
      const user = new User(userRawData);
      expect(user.isAdmin).toBe(false);
    });
  });

  describe('#publicParameters', () => {
    it('should return the public parameters only', () => {
      const publicParameters = {
        name : 'test',
        email: 'email'
      }
      const user = new User(publicParameters);
      expect(user.publicParameters).toMatchObject(publicParameters);
    });
  });
});
