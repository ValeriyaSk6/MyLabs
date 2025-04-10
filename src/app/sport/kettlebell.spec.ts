import { Kettlebell } from './kettlebell';

describe('Kettlebell', () => {
  it('should create an instance with correct properties', () => {
    const kettlebell = new Kettlebell('Competition Kettlebell', 24, 'Steel', 'Blue');
    expect(kettlebell.name).toBe('Competition Kettlebell');
    expect(kettlebell.weight).toBe(24);
    expect(kettlebell.material).toBe('Steel');
    expect(kettlebell.Color).toBe('Blue');
  });

  it('should throw error for non-positive weight', () => {
    expect(() => new Kettlebell('Faulty Kettlebell', 0, 'Iron', 'Red')).toThrowError('Weight must be positive!');
  });

  it('should return correct display info', () => {
    const kettlebell = new Kettlebell('Training Kettlebell', 16, 'Cast Iron', 'Yellow');
    expect(kettlebell.displayInfo()).toBe(`Ім'я: Training Kettlebell, Вага: 16 кг, Матеріал: Cast Iron, Колір: Yellow`);
  });
});
