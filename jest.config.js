module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-fifteen',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '\\.scss$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
