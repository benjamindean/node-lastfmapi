const defaults = require('./defaults');

class Library {
    constructor(lastfm) {
        this.lastfm = lastfm;
    }

    getArtists(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'artists');
        this.lastfm.api.request('library.getArtists', options);
    }
}

module.exports = Library;