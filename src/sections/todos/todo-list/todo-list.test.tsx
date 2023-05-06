import React from 'react';
import { act } from 'react-dom/test-utils';
import { setupServer } from 'msw/node'
import { screen, fireEvent } from '@testing-library/react';
import TodoList from './todo-list.component';
import { renderWithProviders } from '@/utils/test-utils';
import 'cross-fetch/polyfill';
import { handlers } from '@/mocks/api/handler';

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

describe("Test todo list item", () => {
  it('Should render the spiner', () => {
    renderWithProviders(<TodoList />);
    fireEvent.click(screen.getByTestId('startButton'));
    expect(screen.queryByTestId('progress')).toBeInTheDocument();
  });
});
