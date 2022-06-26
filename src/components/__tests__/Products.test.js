import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import testStore from '../../fixtures/testStore';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { products } from '../../fixtures/products';

import { Products } from '../Products';

const setup = () =>
  render(
    <Provider store={testStore}>
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    </Provider>
  );

describe('Products Component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    setup();
  });

  it('should render correct table headers', () => {
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Inventory Date')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });

  it('should render correct data', () => {
    products.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
    expect(screen.getAllByRole('button')).toHaveLength(4);
  });

  it('should redirect to Add product page when "Add a Product" button is clicked', async () => {
    userEvent.click(screen.getByRole('button', { name: 'Add a Product'}));
    await waitFor(() => expect(window.location.pathname).toBe('/add-product'));
  });
});
