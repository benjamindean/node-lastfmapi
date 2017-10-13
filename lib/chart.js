const defaults = require('./defaults');

class Chart {
    constructor(lastfm) {
        this.lastfm = lastfm;
    }

    getLovedTracks(params, callback) {
        if (typeof callback === 'undefined') {
            callback = params;
            params = null;
        }
        const options = defaults.defaultOptions(params, callback, 'tracks');
        this.lastfm.api.request('chart.getLovedTracks', options);
    }

    getTopArtists(params, callback) {
        if (typeof callback === 'undefined') {
            callback = params;
            params = null;
        }
        const options = defaults.defaultOptions(params, callback, 'artists');
        this.lastfm.api.request('chart.getTopArtists', options);
    }

    getTopTags(params, callback) {
        if (typeof callback === 'undefined') {
            callback = params;
            params = null;
        }
        const options = defaults.defaultOptions(params, callback, 'tags');
        this.lastfm.api.request('chart.getTopTags', options);
    }

    getTopTracks(params, callback) {
        if (typeof callback === 'undefined') {
            callback = params;
            params = null;
        }
        const options = defaults.defaultOptions(params, callback, 'tracks');
        this.lastfm.api.request('chart.getTopTracks', options);
    }
}

module.exports = Chart;