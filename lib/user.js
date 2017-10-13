const defaults = require('./defaults');

class User {
    constructor(lastfm) {
        this.lastfm = lastfm;
    }

    getArtistTracks(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'artisttracks');
        this.lastfm.api.request('user.getArtistTracks', options);
    }

    getFriends(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'friends');
        this.lastfm.api.request('user.getFriends', options);
    }

    getInfo(user, callback) {
        if (typeof callback !== 'function') {
            callback = user;
            user = null;
        }
        const params = (user) ? {'user': user} : null;
        const options = defaults.defaultOptions(params, callback, 'user');
        if (!params) {
            options.sk = this.lastfm.sessionCredentials.key;
        }
        this.lastfm.api.request('user.getInfo', options);
    }

    getLovedTracks(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'lovedtracks');
        this.lastfm.api.request('user.getLovedTracks', options);
    }

    getPersonalTags(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'taggings');
        this.lastfm.api.request('user.getPersonalTags', options);
    }

    getRecentTracks(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'recenttracks');
        this.lastfm.api.request('user.getRecentTracks', options);
    }

    getTopAlbums(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'topalbums');
        this.lastfm.api.request('user.getTopAlbums', options);
    }

    getTopArtists(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'topartists');
        this.lastfm.api.request('user.getTopArtists', options);
    }

    getTopTags(user, limit, callback) {
        if (typeof callback !== 'function') {
            callback = limit;
            limit = null;
        }
        const options = defaults.defaultOptions({
            'user': user,
            'limit': limit
        }, callback, 'toptags');
        this.lastfm.api.request('user.getTopTags', options);
    }

    getTopTracks(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'toptracks');
        this.lastfm.api.request('user.getTopTracks', options);
    }

    getWeeklyAlbumChart(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'weeklyalbumchart');
        this.lastfm.api.request('user.getWeeklyAlbumChart', options);
    }

    getWeeklyArtistChart(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'weeklyartistchart');
        this.lastfm.api.request('user.getWeeklyArtistChart', options);
    }

    getWeeklyChartList(user, callback) {
        const options = defaults.defaultOptions({'user': user}, callback, 'weeklychartlist');
        this.lastfm.api.request('user.getWeeklyChartList', options);
    }

    getWeeklyTrackChart(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'weeklytrackchart');
        this.lastfm.api.request('user.getWeeklyTrackChart', options);
    }
}

module.exports = User;