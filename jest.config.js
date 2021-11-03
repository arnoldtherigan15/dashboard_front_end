module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
    "moduleNameMapper": {
        "^.+\\.(css|less)$": "<rootDir>/config/CSSStub.js"
    },
    testEnvironment: 'jsdom',
  };