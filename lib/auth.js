const defaults = require('./defaults');

class Auth {
    constructor(lastfm) {
        this.lastfm = lastfm;
    }

    getMobileSession(username, password, callback) {
        const options = defaults.defaultOptions({
            'username': username,
            'password': password
        }, callback, 'session');

        this.lastfm.api.request('auth.getMobileSession', options);
    }

    getSession(token, callback) {
        const options = defaults.defaultOptions({'token': token}, callback, 'session');

        this.lastfm.api.request('auth.getSession', options);
    }

    getToken(callback) {
        const options = defaults.defaultOptions({}, callback, 'token');

        this.lastfm.api.request('auth.getToken', options);
    }
}

module.exports = Auth;