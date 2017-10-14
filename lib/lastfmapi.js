const url = require('url'),
    LastFmNode = require('lastfm').LastFmNode,
    Album = require('./album'),
    Artist = require('./artist'),
    Auth = require('./auth'),
    Chart = require('./chart'),
    Geo = require('./geo'),
    Library = require('./library'),
    Tag = require('./tag'),
    Track = require('./track'),
    User = require('./user');

class LastFmAPI {
    constructor(options) {
        this.api = new LastFmNode(options);
        this.sessionCredentials = null;

        this.album = new Album(this);
        this.artist = new Artist(this);
        this.auth = new Auth(this);
        this.chart = new Chart(this);
        this.geo = new Geo(this);
        this.library = new Library(this);
        this.tag = new Tag(this);
        this.track = new Track(this);
        this.user = new User(this);
    }

    getAuthenticationUrl(params) {
        if (!params) {
            params = {};
        }

        const baseUrl = 'http://www.last.fm/api/auth',
            urlParts = url.parse(baseUrl);

        urlParts.query = {};
        urlParts.query.api_key = this.api.api_key;

        if (params.cb) {
            urlParts.query.cb = params.cb;
        }

        if (params.token) {
            urlParts.query.token = params.token;
        }

        return url.format(urlParts);
    }

    setSessionCredentials(username, key) {
        this.sessionCredentials = {
            'username': username,
            'key': key
        };
    }

    authenticate(token, callback) {
        if (typeof callback !== 'function') {
            callback = function () {
            };
        }

        this.auth.getSession(token, (err, session) => {
            if (err) {
                return callback(err);
            }
            if (!session.key) {
                return callback(new Error('Something fishy'));
            }

            this.setSessionCredentials(session.name, session.key);
            callback(null, this.sessionCredentials);
        });
    }
}

module.exports = LastFmAPI;