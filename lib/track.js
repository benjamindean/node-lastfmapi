const defaults = require('./defaults');

class Track {
    constructor(lastfm) {
        this.lastfm = lastfm;
    }

    addTags(artist, track, tags, callback) {
        if (!Array.isArray(tags)) {
            tags = [tags];
        }
        const options = defaults.defaultOptions({
            'artist': artist,
            'track': track,
            'tags': tags.join(','),
            'sk': this.lastfm.sessionCredentials.key
        }, callback);
        this.lastfm.api.request('track.addTags', options);
    }

    getCorrection(artist, track, callback) {
        const options = defaults.defaultOptions({
            'artist': artist,
            'track': track
        }, callback, 'corrections');
        this.lastfm.api.request('track.getCorrection', options);
    }

    getInfo(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'track');
        this.lastfm.api.request('track.getInfo', options);
    }

    getSimilar(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'similartracks');
        this.lastfm.api.request('track.getSimilar', options);
    }

    getTags(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'tags');
        this.lastfm.api.request('track.getTags', options);
    }

    getTopTags(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'toptags');
        this.lastfm.api.request('track.getTopTags', options);
    }

    love(params, callback) {
        const options = defaults.defaultOptions(params, callback);
        options.sk = this.lastfm.sessionCredentials.key;
        this.lastfm.api.request('track.love', options);
    }

    removeTag(artist, track, tag, callback) {
        const options = defaults.defaultOptions({
            'artist': artist,
            'track': track,
            'tag': tag,
            'sk': this.lastfm.sessionCredentials.key
        }, callback);
        this.lastfm.api.request('track.removeTag', options);
    }

    scrobble(params, callback) {
        let i, len, key, newParams = {};

        if (Array.isArray(params)) {
            for (i = 0, len = params.length; i < len; i++) {
                for (key in params[i]) {
                    newParams[key + '[' + i + ']'] = params[i][key];
                }
            }
            params = newParams;
        }
        const options = defaults.defaultOptions(params, callback, 'scrobbles');
        options.sk = this.lastfm.sessionCredentials.key;
        this.lastfm.api.request('track.scrobble', options);
    }

    search(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'results');
        this.lastfm.api.request('track.search', options);
    }

    unlove(artist, track, callback) {
        const options = defaults.defaultOptions({
            'artist': artist,
            'track': track,
            'sk': this.lastfm.sessionCredentials.key
        }, callback);
        this.lastfm.api.request('track.unlove', options);
    }

    updateNowPlaying(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'nowplaying');
        options.sk = this.lastfm.sessionCredentials.key;
        this.lastfm.api.request('track.updateNowPlaying', options);
    }
}

module.exports = Track;