const defaults = require('./defaults');

class Artist {
    constructor(lastfm) {
        this.lastfm = lastfm;
    }

    addTags(artist, tags, callback) {
        if (!Array.isArray(tags)) {
            tags = [tags];
        }
        const options = defaults.defaultOptions({
            'artist': artist,
            'tags': tags.join(','),
            'sk': this.lastfm.sessionCredentials.key
        }, callback);

        this.lastfm.api.request('artist.addTags', options);
    }

    getCorrection(artist, callback) {
        const options = defaults.defaultOptions({'artist': artist}, callback, 'corrections');

        this.lastfm.api.request('artist.getCorrection', options);
    }

    getInfo(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'artist');

        this.lastfm.api.request('artist.getInfo', options);
    }

    getSimilar(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'similarartists');

        this.lastfm.api.request('artist.getSimilar', options);
    }

    getTags(params, callback) {
        if (!params.user) {
            params.user = this.lastfm.sessionCredentials.username;
        }
        const options = defaults.defaultOptions(params, callback, 'tags');

        this.lastfm.api.request('artist.getTags', options);
    }

    getTopAlbums(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'topalbums');

        this.lastfm.api.request('artist.getTopAlbums', options);
    }

    getTopTags(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'toptags');

        this.lastfm.api.request('artist.getTopTags', options);
    }

    getTopTracks(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'toptracks');

        this.lastfm.api.request('artist.getTopTracks', options);
    }

    removeTag(artist, tag, callback) {
        const options = defaults.defaultOptions({
            'artist': artist,
            'tag': tag,
            'sk': this.lastfm.sessionCredentials.key
        }, callback);

        this.lastfm.api.request('artist.removeTag', options);
    }

    search(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'results');

        this.lastfm.api.request('artist.search', options);
    }
}

module.exports = Artist;