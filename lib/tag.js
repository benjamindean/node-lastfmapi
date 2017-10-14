const defaults = require('./defaults');

class Tag {
    constructor(lastfm) {
        this.lastfm = lastfm;
    }

    getInfo(tag, lang, callback) {
        if (typeof callback !== 'function') {
            callback = lang;
            lang = null;
        }
        const options = defaults.defaultOptions({
            'tag': tag,
            'lang': lang
        }, callback, 'tag');

        this.lastfm.api.request('tag.getInfo', options);
    }

    getSimilar(tag, callback) {
        const options = defaults.defaultOptions({'tag': tag}, callback, 'similartags');

        this.lastfm.api.request('tag.getSimilar', options);
    }

    getTopAlbums(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'topalbums');

        this.lastfm.api.request('tag.getTopAlbums', options);
    }

    getTopArtists(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'topartists');

        this.lastfm.api.request('tag.getTopArtists', options);
    }

    getTopTags(callback) {
        const options = defaults.defaultOptions(null, callback, 'toptags');

        this.lastfm.api.request('tag.getTopTags', options);
    }

    getTopTracks(params, callback) {
        const options = defaults.defaultOptions(params, callback, 'toptracks');

        this.lastfm.api.request('tag.getTopTracks', options);
    }

    getWeeklyChartList(tag, callback) {
        const options = defaults.defaultOptions({'tag': tag}, callback, 'weeklychartlist');

        this.lastfm.api.request('tag.getWeeklyChartList', options);
    }
}

module.exports = Tag;