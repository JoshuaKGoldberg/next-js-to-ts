module.exports = {
  automock: false,
  clearMocks: true,
  errorOnDeprecated: false,
  moduleFileExtensions: ["js", "json"],
  moduleNameMapper: {
    "^.+\\.css$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  timers: "modern",
  transform: {
    "^.+\\.(js|jsx)$": ["babel-jest", { configFile: "./babel.jest.config.js" }],
  },
};
