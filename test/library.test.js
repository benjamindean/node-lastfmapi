const assert = require('assert'),
    LastFmAPI = require('../lib/lastfmapi'),
    LastFmAPIObject = new LastFmAPI({
        'api_key': 'testapikey',
        'secret': 'testsecret'
    }),
    Library = require('../lib/library');

describe('Library', () => {
    describe('Main', () => {
        it('Should return Library instance', (done) => {
            new Library(LastFmAPIObject);

            done();
        });
    });

    describe('getArtist', () => {
        it('Should return correct options', (done) => {
            new Library(LastFmAPIObject).getArtists({
                user: "someuser",
                limit: 5,
                page: 1,
                api_key: "testapikey"
            });

            done();
        });
    });
});