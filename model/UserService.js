/* eslint-disable class-methods-use-this */
export default class UserService {
  async register({ username, password }) {
    return { token: `secret-token-${password}`, username };
  }

  async login({ username, password }) {
  
    return { token: `secret-token-${password}`, username };
  }
}
