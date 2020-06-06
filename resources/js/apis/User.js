import Token from './Token';
import AppStorage from './AppStorage';

class User {
    login(data) {
        axios.post('/api/auth/login', data)
            .then((response) => this.checkAccessUser(response))
            .catch((error) => console.log(error.response.data))
    }

    checkAccessUser(response) {
        const access_token = response.data.access_token;
        const username = response.data.user;
        const role = response.data.role;
        if(Token.isValid(access_token)) {
            AppStorage.store(access_token, username, role);
            window.location.href = '/forum';
        }
    }

    hasToken() {
        const storeToken = AppStorage.getToken();
        if (storeToken) {
            return Token.isValid(storeToken) ? true : this.isLogout();
        }
        return false;
    }

    isLogged() {
        return this.hasToken();
    }

    isLogout() {
        AppStorage.clear();
        window.location.href = '/forum';
    }

    getUsername() {
        if (this.isLogged()) {
            return AppStorage.getUser();
        }
    }

    getIdUser() {
        if (this.isLogged()) {
            const payload = Token.payload(AppStorage.getToken());
            return payload.sub;
        }
    }

    isAuthorizedActions(id) {
        return this.getIdUser() === id ? true : false;
    }

    isAuthorized() {
        if (this.isLogged()) {
            return AppStorage.getRole() === 'USER' ? false : true;
        }
        return false;
    }
}


export default User = new User();
