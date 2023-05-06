// ./src/setupTests.js

import '@testing-library/jest-dom';
import { server } from './mocks/api/server'
import { Api } from '@/api/api';
import { setupStore } from '@/store/store';


// Establish API mocking before all tests.
beforeAll(() => {
    server.listen();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
    server.resetHandlers();
});

// Clean up after the tests are finished.
afterAll(() => server.close());
