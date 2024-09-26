
import React from 'react';
import { render, screen } from '@testing-library/react';
import { CalculatorDisplay } from './calculator-display';

describe('DisplayComponent', () => {

  it('should contain an element with text "0"', () => {
    render(<CalculatorDisplay displayValue='0' />);
    const element = screen.getByText(/0/i);
    expect(element).toBeInTheDocument();
  });

});
