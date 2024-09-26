
import { CalculatorModel } from './calculator.model';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ActionKeys } from '../enums/action-keys.enum';

describe('CalculatorModel', (): void => {

  let calculator: ICalculatorModel;

  beforeEach((): void => {
    calculator = new CalculatorModel();
  });

  it('should contain a CalculatorModel class that implements ICalculatorModel', (): void => {

    expect(calculator).toBeDefined();

  });

  it('should have an empty display on init', (): void => {

    // Act
    const displayValue: string = calculator.display();

    // Assert
    expect(displayValue).toEqual('');

  });

  it('should display `1` when the `1` key is pressed', (): void => {

    // Act
    calculator.pressNumericKey(NumericKeys.ONE);
    const displayValue: string = calculator.display();

    // Assert
    expect(displayValue).toEqual('1');

  });

  it('should display `2` when the `2` key is pressed', (): void => {

    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('2');

  });

  it('should display `98` when the `9` key is pressed followed by the `8` key', (): void => {

    calculator.pressNumericKey(NumericKeys.NINE);
    calculator.pressNumericKey(NumericKeys.EIGHT);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('98');

  });

  it('should display `13` when equals is clicked on `7 + 6`', (): void => {

    calculator.pressNumericKey(NumericKeys.SEVEN);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.SIX);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('13');

  });

  it('should display `5` when equals is clicked on `15 - 10`', (): void => {

    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressNumericKey(NumericKeys.FIVE);
    calculator.pressOperatorKey(OperatorKeys.MINUS);
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressNumericKey(NumericKeys.ZERO);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('5');

  });

  it('should display `21` when equals is clicked on `3 * 7`', (): void => {

    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressOperatorKey(OperatorKeys.MULT);
    calculator.pressNumericKey(NumericKeys.SEVEN);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('21');

  });

  it('should display `12` when equals is clicked on `144 / 12`', (): void => {

    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressNumericKey(NumericKeys.FOUR);
    calculator.pressNumericKey(NumericKeys.FOUR);
    calculator.pressOperatorKey(OperatorKeys.DIV);
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('12');

  });

});
