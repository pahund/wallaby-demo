module.exports = function () {
    return {
        files: [
            {
                pattern: "js/lib/require.js",
                instrument: false
            },
            {
                pattern: "js/lib/jquery.js",
                instrument: false
            },
            {
                pattern: "js/lib/jasmine-jquery.js",
                instrument: false,
                load: false
            },
            {
                pattern: "test/app.js",
                instrument: false
            },
            {
                pattern: "test/fixtures/navigation.html",
                instrument: false
            },
            {
                pattern: "js/navigation.js",
                load: false
            }
        ],

        tests: [
            {
                pattern: "test/specs/navigation-spec.js",
                load: false
            }
        ]
    };
};
