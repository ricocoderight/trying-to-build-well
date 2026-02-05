import { Calculator } from './calculator';

/**
 * Main application entry point
 */
function main(): void {
  console.log('=== Well-Built Calculator Application ===\n');

  const calculator = new Calculator();

  // Demonstrate calculator functionality
  console.log('Addition: 5 + 3 =', calculator.add(5, 3));
  console.log('Subtraction: 10 - 4 =', calculator.subtract(10, 4));
  console.log('Multiplication: 6 * 7 =', calculator.multiply(6, 7));
  console.log('Division: 20 / 4 =', calculator.divide(20, 4));

  console.log('\n=== Application completed successfully ===');
}

// Run the application
main();
