module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/tests/enzyme-adapter.js'
  ],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
