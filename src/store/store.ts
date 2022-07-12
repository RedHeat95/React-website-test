import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';

export default class Store {
  isAuth = false;
  isEmail = false;
  isError = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setEmail(bool: boolean) {
    this.isEmail = bool;
  }

  setError(bool: boolean) {
    this.isError = bool;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.access_token);
      this.setAuth(true);
      this.setEmail(true);
    } catch (error) {
      console.log(error);
      this.setAuth(false);
      this.setEmail(false);
      this.setError(true);
    }
  }
}
