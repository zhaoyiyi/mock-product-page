import { render, screen } from '@testing-library/react';
import React from 'react';

import { SizeSelector } from '../SizeSelector';

describe('Size Selector', () => {
  it('should show low stock alert', async () => {
    render(<SizeSelector onSelect={jest.fn} selectedVariant={{ size: '10', stock: 2 }} variants={[]} />);

    expect(await screen.findByText('ONLY 2 LEFT IN STOCK')).toBeVisible();
  });

  it('should not show low stock alert if stock is greater than 5', async () => {
    const { container } = render(
      <SizeSelector onSelect={jest.fn} selectedVariant={{ size: '10', stock: 20 }} variants={[]} />
    );
    expect(container).not.toHaveTextContent('LEFT IN STOCK');
  });
});
