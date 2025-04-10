import { EquipmentList } from './equipmentList';
import { Barbell } from './barbell';
import { Dumbbell } from './dumbbell';
import { Kettlebell } from './kettlebell';

describe('EquipmentList', () => {
  let list: EquipmentList;

  beforeEach(() => {
    list = new EquipmentList();
  });

  it('should add Barbell correctly', () => {
    list.addEquipment('Barbell', 'Standard Bar', 20, 'Steel', 2.0);
    expect(list.eqList.length).toBe(1);
    expect(list.eqList[0]).toBeInstanceOf(Barbell);
  });

  it('should add Dumbbell correctly', () => {
    list.addEquipment('Dumbbell', 'Gym Dumbbell', 12, 'Rubber', true);
    expect(list.eqList.length).toBe(1);
    expect(list.eqList[0]).toBeInstanceOf(Dumbbell);
  });

  it('should add Kettlebell correctly', () => {
    list.addEquipment('Kettlebell', 'Training Kettlebell', 16, 'Iron', 'Red');
    expect(list.eqList.length).toBe(1);
    expect(list.eqList[0]).toBeInstanceOf(Kettlebell);
  });

  it('should throw error for unknown type', () => {
    expect(() => list.addEquipment('UnknownType', 'Mystery Equipment', 10, 'Unknown', null))
      .toThrowError('Unknown equipment type: UnknownType');
  });
});
