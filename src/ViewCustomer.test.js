import { render, screen } from '@testing-library/react';
import ViewCustomer from './ViewCustomer';



jest.mock('axios');
jest.mock('react-router-dom');
jest.mock('react-router-dom');

describe("ViewCustomerComponent", () => {
    test('renders view customer title ', () => {
        render(<ViewCustomer />);
        const linkElement = screen.getByRole("heading");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("TEXTILE SHOP MANAGEMENT SYSTEM");
    });

    test('renders view customer info ', () => {
        render(<ViewCustomer />);
        const linkElement = screen.getByRole("info");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Customer's Informations");
    });

    test('renders customer table', () => {
        render(<ViewCustomer />);
        const tableElement = screen.getByRole('table');
        expect(tableElement).toBeInTheDocument();
    });
});

