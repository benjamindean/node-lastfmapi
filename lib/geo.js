const defaults = require('./defaults');

class Geo {
    constructor(lastfm) {
        this.lastfm = lastfm;
    }

    getTopArtists(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'topartists');

        this.lastfm.api.request('geo.getTopArtists', options);
    }

    getTopTracks(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'tracks');

        this.lastfm.api.request('geo.getTopTracks', options);
    }
}

module.exports = Geo;