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
        if(Token.isValid(access_token)) {
            AppStorage.store(access_token, username);
            window.location.href = '/forum';
        }
    }

    hasToken() {
        const storeToken = AppStorage.getToken();
        if (storeToken) {
            return Token.isValid(storeToken) ? true : false;
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
}


export default User = new User();
