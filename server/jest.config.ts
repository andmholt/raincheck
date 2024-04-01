import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@docs(.*)$': '<rootDir>/docs$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/dist'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts'
  ],
  testTimeout: 10000,
  watch: false,
  watchAll: false
}

export default config