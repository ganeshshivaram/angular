export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    var promise = new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve(this.loggedIn);
      }, 100);
    });

    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logoff() {
    this.loggedIn = false;
  }
}
