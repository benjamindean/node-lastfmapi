const defaults = require('./defaults');

class Album {
    constructor(lastfm) {
        this.lastfm = lastfm;
    }

    addTags(artist, album, tags, callback) {
        if (!Array.isArray(tags)) {
            tags = [tags];
        }
        const options = defaults.defaultOptions({
            'artist': artist,
            'album': album,
            'tags': tags.join(','),
            'sk': this.lastfm.sessionCredentials.key
        }, callback);
        this.lastfm.api.request('album.addTags', options);
    }

    getInfo(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'album');
        this.lastfm.api.request('album.getInfo', options);
    }

    getTags(params, callback) {
        if (!params.user) {
            params.user = this.lastfm.sessionCredentials.username;
        }
        const options = defaults.defaultOptions(params, callback, 'tags');
        this.lastfm.api.request('album.getTags', options);
    }

    getTopTags(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'toptags');
        this.lastfm.api.request('album.getTopTags', options);
    }

    removeTag(artist, album, tag, callback) {
        const options = defaults.defaultOptions({
            'artist': artist,
            'album': album,
            'tag': tag,
            'sk': this.lastfm.sessionCredentials.key
        }, callback);
        this.lastfm.api.request('album.removeTag', options);
    }

    search(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'results');
        this.lastfm.api.request('album.search', options);
    }
}

module.exports = Album;