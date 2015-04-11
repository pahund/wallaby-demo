/* global wallaby, requirejs, jasmine */
wallaby.delayStart();

requirejs.config({
    baseUrl: "/js",

    paths: {
        "jquery": "lib/jquery",
        "jasmine-jquery": "lib/jasmine-jquery"
    },

    // ask Require.js to load these files (all our tests)
    deps: wallaby.tests,

    // start test run, once Require.js is done
    callback: function () {
        // override the default path where fixtures are loaded from
        jasmine.getFixtures().fixturesPath = "/test/fixtures";
        wallaby.start();
    }
});
