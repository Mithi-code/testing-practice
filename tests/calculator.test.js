import Calculator from '../classes/calculatorClass.js'

const Calculator1 = new Calculator(4, 4);
const Calculator2 = new Calculator(20, 10);
const Calculator3 = new Calculator(25, 5);

describe('my calculator for add', () => {
  test('4+4=8', () => {
    expect(Calculator1.add()).toBe(8);
  });

  test('20+10= 30', () => {
    expect(Calculator2.add()).toBe(30);
  });

  test('25+5= 30', () => {
    expect(Calculator3.add()).toBe(30);
  });
});

describe('my calculator for subtract', () => {
  test('4-4= 0', () => {
    expect(Calculator1.subtract()).toBe(0);
  });

  test('20-10= 10', () => {
    expect(Calculator2.subtract()).toBe(10);
  });

  test('25-5= 20', () => {
    expect(Calculator3.subtract()).toBe(20);
  });
});

describe('my calculator for divide', () => {
  test('5/5= 1', () => {
    expect(Calculator1.divide()).toBe(1);
  });

  test('20/10= 2', () => {
    expect(Calculator2.divide()).toBe(2);
  });

  test('25/5= 5', () => {
    expect(Calculator3.divide()).toBe(5);
  });
});

describe('my calculator for multiply', () => {
  test('4*4= 16', () => {
    expect(Calculator1.multiply()).toBe(16);
  });

  test('20*10= 200', () => {
    expect(Calculator2.multiply()).toBe(200);
  });

  test('25*5= 125', () => {
    expect(Calculator3.multiply()).toBe(125);
  });
});