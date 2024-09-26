import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from './calculator';

describe('Calculator', () => {

  it('should contain an element with text "1"', () => {
    render(<Calculator />);
    const linkElement = screen.getByText(/1/i);
    expect(linkElement).toBeInTheDocument();
  });

});
