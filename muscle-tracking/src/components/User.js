class User {
    isLoggedIn = () => this.get('isLoggedIn') === 'true';

    set = (key, value) => localStorage.setItem(key, value);

    get = key => this.getLocalStorage(key);

    getLocalStorage = key => {
      const ret = localStorage.getItem(key);
      if (ret) {
        return ret;
      }
      return null;
    };

    register = async (email, password) => {
      if(email === undefined || password === undefined){
        return false;
      }
      return true;
    }

    login = async (email, password) => {
      if(email === undefined || password === undefined){
        return false;
      }
      this.set('isLoggedIn', true);
      return true;
    };

    logout = async () => {
      if (this.isLoggedIn()) {
        this.set('isLoggedIn', false);
      }
    };
  }
  export default new User();
