const assert = require('assert'),
    LastFmAPI = require('../lib/lastfmapi'),
    LastFmAPIObject = new LastFmAPI({
        'api_key': 'testapikey',
        'secret': 'testsecret'
    });

describe('LastFmAPI', () => {
    describe('Main', () => {
        it('Should return correct API instance', () => {
            assert.deepEqual(LastFmAPIObject.api, {
                url: '/2.0',
                host: 'ws.audioscrobbler.com',
                format: 'json',
                secret: 'testsecret',
                api_key: 'testapikey',
                useragent: 'lastfm-node'
            });
        });
    });

    describe('getAuthenticationUrl', () => {
        it('Should return correct auth url', () => {
            const authUrl = LastFmAPIObject.getAuthenticationUrl({
                'cb': 'http://example.com/auth'
            });

            assert.equal(
                authUrl,
                'http://www.last.fm/api/auth?api_key=testapikey&cb=http%3A%2F%2Fexample.com%2Fauth'
            );
        });
    });

    describe('setSessionCredentials', () => {
        it('Should return correct session credentials', () => {
            LastFmAPIObject.setSessionCredentials('user', 'key');

            assert.deepEqual(LastFmAPIObject.sessionCredentials, {
                'username': 'user',
                'key': 'key'
            });
        });
    });
});