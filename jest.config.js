
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
    "moduleNameMapper": {
        "^.+\\.(css|less)$": "<rootDir>/config/CSSStub.js"
    },
    testEnvironment: 'jsdom',
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!d3|internmap|delaunator|robust-predicates)'
    ],
  };