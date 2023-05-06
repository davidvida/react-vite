import React from "react";
import { render, screen } from '@testing-library/react';
import Header from "./header.component";

describe('Testing Header component', () => {
  it('Should render the Header component with value', () => {
    render(<Header title="Test"/>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});