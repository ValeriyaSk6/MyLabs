import { Barbell } from './barbell';

describe('Barbell', () => {
  it('should create an instance with correct properties', () => {
    const barbell = new Barbell('Olympic Bar', 20, 'Steel', 2.2);
    expect(barbell.name).toBe('Olympic Bar');
    expect(barbell.weight).toBe(20);
    expect(barbell.material).toBe('Steel');
    expect(barbell.EqLength).toBe(2.2);
  });

  it('should return correct display info', () => {
    const barbell = new Barbell('Power Bar', 25, 'Alloy', 2.7);
    expect(barbell.displayInfo()).toBe(`Ім'я: Power Bar, Вага: 25 кг, Матеріал: Alloy, Довжина: 2.7`);
  });
});
