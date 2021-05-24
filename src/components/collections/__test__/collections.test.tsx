import { render, screen } from '../../../test-utils/testing-library';
import Collections from '../Collections';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

beforeEach(() => {
  const observe = jest.fn();
  const unobserve = jest.fn();
  const disconnect = jest.fn();
  //@ts-ignore
  window.IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
    disconnect
  }));
});

describe('Collection Component', () => {
  it('should create new collection', async () => {
    render(<Collections />);

    const createBtn = screen.getByRole('button', {
      name: /create collection/i
    });
    userEvent.click(createBtn);

    const formTitle = screen.getByText(/create new collection/i);

    expect(formTitle).toBeInTheDocument();

    const nameInput = screen.getByLabelText(/collection name/i);
    const descriptionInput = screen.getByLabelText(/description/i);

    userEvent.clear(nameInput);
    userEvent.type(nameInput, 'Element');

    userEvent.clear(descriptionInput);
    userEvent.type(descriptionInput, 'some Description about element');

    const createButton = screen.getByRole('button', { name: /create/i });

    userEvent.click(createButton);

    await waitFor(() => {
      expect(
        screen.queryByText(/create new collection/i)
      ).not.toBeInTheDocument();
      expect(screen.getByText('Element')).toBeInTheDocument();
      expect(
        screen.getByText('some Description about element')
      ).toBeInTheDocument();
    });
  });
});
