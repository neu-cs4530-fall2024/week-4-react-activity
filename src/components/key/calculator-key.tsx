
import React from 'react';

export function CalculatorKey(arg: any) {
  return <button className={`calculator-key ${arg.className}`} onClick={() => alert(`${arg.label}-key pressed`)}>{arg.label}</button>;         
}
