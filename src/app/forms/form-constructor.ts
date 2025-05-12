import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productType } from '../products/musicproductfactory';
import { nameValidator } from '../validators/name.validator';
import { yearValidator } from '../validators/year.validator';
import { formatValidator } from '../validators/format.validator';

export function formConstructor(
  type: string,
  productForm: FormGroup,
  fb: FormBuilder
): void {
  const controlsToRemove = [
    'artist',
    'year',
    'rpm',
    'tracks',
    'format',
    'instrumentType',
    'brand',
    'isElectronic'
  ];

  controlsToRemove.forEach((control) => {
    if (productForm.contains(control)) {
      productForm.removeControl(control);
    }
  });

  // Спільні поля
  if (!productForm.contains('name')) {
    productForm.addControl('name', fb.control('', [Validators.required, nameValidator()]));
    productForm.addControl('price', fb.control('', [Validators.required, Validators.min(1)]));
  }

  // Специфічні поля
  switch (type) {
    case productType[0]: // Vinyl
      productForm.addControl('artist', fb.control('', Validators.required));
      productForm.addControl('year', fb.control('', [Validators.required, yearValidator()]));
      productForm.addControl('rpm', fb.control('', [Validators.required, Validators.min(1)]));
      break;

    case productType[1]: // CD
      productForm.addControl('artist', fb.control('', Validators.required));
      productForm.addControl('year', fb.control('', [Validators.required, yearValidator()]));
      productForm.addControl('tracks', fb.control('', [
        Validators.required,
        Validators.min(1),
        Validators.max(100)
      ]));
      break;

    case productType[2]: // DigitalMusic
      productForm.addControl('artist', fb.control('', Validators.required));
      productForm.addControl('year', fb.control('', [Validators.required, yearValidator()]));
      productForm.addControl('format', fb.control('', [Validators.required, formatValidator()]));
      break;

    case productType[3]: // MusicalInstrument
      productForm.addControl('instrumentType', fb.control('', Validators.required));
      productForm.addControl('brand', fb.control('', Validators.required));
      productForm.addControl('isElectronic', fb.control(null, Validators.required));
      break;

    default:
      throw new Error('Unsupported product type');
  }
}

