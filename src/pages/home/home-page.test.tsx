import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from "./home-page";

describe('Test the Home Page Component', () => {
  it('Should render the ', () => {
    const handleRedirect = jest.fn();
    render(<HomePage handleRedirect={handleRedirect} />);
    fireEvent.click(screen.queryByText('Go to Todos') as HTMLElement);
    expect(handleRedirect).toBeCalled();
  });

  it('Should the button set disable after the fisrt click ', () => {
    const handleRedirect = jest.fn();
    render(<HomePage handleRedirect={handleRedirect} />);
    fireEvent.click(screen.queryByText('Go to Todos') as HTMLElement);
    expect(screen.queryByText('Go to Todos')).toBeDisabled();
  });
});
