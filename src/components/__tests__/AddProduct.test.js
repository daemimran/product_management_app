import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import testStore from '../../fixtures/testStore';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddProduct } from '../AddProduct';

const setup = () =>
  render(
    <Provider store={testStore}>
      <BrowserRouter>
        <AddProduct />
      </BrowserRouter>
    </Provider>
  );

describe('AddProduct Component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    setup();
  });

  it('should render the form correctly', () => {
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Inventory Date')).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(2);
    expect(screen.getAllByRole('spinbutton')).toHaveLength(1);
    expect(screen.getByRole('button', { name: 'See all Products' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('should redirect to products page when "See all Products" button is clicked', async () => {
    userEvent.click(screen.getByRole('button', { name: 'See all Products' }));
    await waitFor(() => expect(window.location.pathname).toBe('/'));
  });

  it('should validate the fields correctly', async () => {
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    await waitFor(() => {
      expect(screen.getAllByText('Required')).toHaveLength(4);
    });
  });
});
