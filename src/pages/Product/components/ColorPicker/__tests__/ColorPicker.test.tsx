import { render } from '@testing-library/react';
import React from 'react';

import { productColors } from '../../../Product.mock';
import { ColorPicker } from '../ColorPicker';

describe('Color Picker', () => {
  it('should render color picker', () => {
    expect(() =>
      render(
        <ColorPicker currentColor="blue" currentColorImageUrl="image.url" productColors={productColors} />
      )
    ).not.toThrow();
  });
});
