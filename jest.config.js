module.exports = {
  automock: false,
  clearMocks: true,
  errorOnDeprecated: false,
  moduleFileExtensions: ["js", "json", "ts", "tsx"],
  moduleNameMapper: {
    "^.+\\.css$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  timers: "modern",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { configFile: "./babel.jest.config.js" }],
  },
};
