module.exports = {
  automock: false,
  clearMocks: true,
  errorOnDeprecated: false,
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "^.+\\.css$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  timers: "modern",
  // might also have to change testMatch
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { configFile: "./babel.jest.config.js" }],
  },
};
