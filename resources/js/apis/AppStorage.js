class AppStorage {
    storeToken(token)  {
        localStorage.setItem('token', token);
    }

    storeUser(user, role)  {
        localStorage.setItem('user', user);
        localStorage.setItem('role', role);
    }

    getToken()  {
        return localStorage.getItem('token');
    }

    getUser()  {
        return localStorage.getItem('user');
    }

    getRole()  {
        return localStorage.getItem('role');
    }

    store(token, user, role) {
        this.storeToken(token);
        this.storeUser(user, role);
    }

    clear() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('role');
    }
}

export default AppStorage = new AppStorage();
