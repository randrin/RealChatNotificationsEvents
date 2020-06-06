import User from './User';

class Exception {
    handleError(error) {
        this.isExpired(error.response.data.error);
    }
    isExpired(error) {
        if(error === 'Token expired, try another connexion') {
            User.isLogout();
        }
    }
}

export default Exception = new Exception();
