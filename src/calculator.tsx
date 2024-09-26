import './calculator.css';
import { CalculatorDisplay, CalculatorKey } from './components';
import { NumericKeys } from './enums/numeric-keys.enum';
import { OperatorKeys } from './enums/operator-keys.enum';
import { ActionKeys } from './enums/action-keys.enum';


export default function Calculator() {

  return (
    <div className='container'>
      <div className="calculator">

        
        <CalculatorDisplay />


        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <CalculatorKey className="key-clear" label={ActionKeys.CLEAR}  />
              <CalculatorKey className="key-sign" label={ActionKeys.SIGN_FLIP}  />
              <CalculatorKey className="key-percent" label={OperatorKeys.SQRT}  />
            </div>
            <div className="digit-keys">
              <CalculatorKey className="key-0" label={NumericKeys.ZERO}  />
              <CalculatorKey className="key-dot" label={ActionKeys.DOT}  />
              <CalculatorKey className="key-1" label={NumericKeys.ONE}  />
              <CalculatorKey className="key-2" label={NumericKeys.TWO}  />
              <CalculatorKey className="key-3" label={NumericKeys.THREE}  />
              <CalculatorKey className="key-4" label={NumericKeys.FOUR}  />
              <CalculatorKey className="key-5" label={NumericKeys.FIVE}  />
              <CalculatorKey className="key-6" label={NumericKeys.SIX}  />
              <CalculatorKey className="key-7" label={NumericKeys.SEVEN}  />
              <CalculatorKey className="key-8" label={NumericKeys.EIGHT}  />
              <CalculatorKey className="key-9" label={NumericKeys.NINE}  />
            </div>
          </div>
          <div className="operator-keys">
            <CalculatorKey className="key-divide" label={OperatorKeys.DIV}  />
            <CalculatorKey className="key-multiply" label={OperatorKeys.MULT}  />
            <CalculatorKey className="key-subtract" label={OperatorKeys.MINUS}  />
            <CalculatorKey className="key-add" label={OperatorKeys.PLUS}  />
            <CalculatorKey className="key-equals" label={ActionKeys.EQUALS}  />
          </div>
        </div>
      </div>
    </div>
  ) 
}