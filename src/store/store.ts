import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';

export default class Store {
  isAuth = false;
  isEmail = false;
  isError = false;
  isToken = '';

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

  setToken(str: string) {
    this.isToken = str;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('email', email);
      this.setToken(response.data.access_token);
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
