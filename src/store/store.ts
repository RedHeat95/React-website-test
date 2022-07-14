import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";

export default class Store {
  isAuth = false;
  isToken = "";
  isEmail = "";
  isError = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setToken(str: string) {
    this.isToken = str;
  }

  setEmail(str: string) {
    this.isEmail = str;
  }

  setError(bool: boolean) {
    this.isError = bool;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("email", email);
      this.setToken(response.data.access_token);
      this.setEmail(email);
      this.setAuth(true);
    } catch (error) {
      console.log(error);
      this.setError(true);
    }
  }
}
