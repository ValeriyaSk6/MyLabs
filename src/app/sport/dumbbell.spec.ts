import { Dumbbell } from './dumbbell';

describe('Dumbbell', () => {
  it('should create an instance with correct properties', () => {
    const dumbbell = new Dumbbell('Hex Dumbbell', 10, 'Rubber', true);
    expect(dumbbell.name).toBe('Hex Dumbbell');
    expect(dumbbell.weight).toBe(10);
    expect(dumbbell.material).toBe('Rubber');
    expect(dumbbell.isAdjustable).toBeTrue();
  });

  it('should return correct display info', () => {
    const dumbbell = new Dumbbell('Adjustable Dumbbell', 15, 'Steel', false);
    expect(dumbbell.displayInfo()).toBe(`Ім'я: Adjustable Dumbbell, Вага: 15 кг, Матеріал: Steel, Регульована: false`);
  });
});
