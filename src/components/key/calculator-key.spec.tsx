
import React from 'react';
import { render, screen } from '@testing-library/react';
import { CalculatorKey } from './calculator-key';
import { NumericKeys } from '../../enums/numeric-keys.enum';

describe('CalculatorKey', () => {

  it('should contain an element with text "1"', () => {
    render(<CalculatorKey className='class' label={NumericKeys.ONE} onPress={() => {}}></CalculatorKey>);
    const element = screen.getByText(/1/i);
    expect(element).toBeInTheDocument();
  });

});
