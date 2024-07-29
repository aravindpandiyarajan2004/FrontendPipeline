import { render, screen } from '@testing-library/react';
import ViewOrder from './ViewOrder';


jest.mock('axios');
jest.mock('react-router-dom');

describe("ViewOrderComponent", () => {
    test('renders view orders title ', () => {
        render(<ViewOrder />);
        const linkElement = screen.getByRole("heading");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("TEXTILE SHOP MANAGEMENT SYSTEM");
    });

    test('renders view orders title ', () => {
        render(<ViewOrder />);
        const linkElement = screen.getByRole("info");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Order's Informations");
    });

    test('renders view orders id ', () => {
        render(<ViewOrder />);
        const linkElement = screen.getByRole("orderId");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Order Id");
    });

    test('renders view orders Materials ', () => {
        render(<ViewOrder />);
        const linkElement = screen.getByRole("material");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Materials");
    });

    test('renders view orders Price ', () => {
        render(<ViewOrder />);
        const linkElement = screen.getByRole("price");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Price");
    });

    test('renders view orders Action ', () => {
        render(<ViewOrder />);
        const linkElement = screen.getByRole("action");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Action");
    });

    test('renders Add Button ', () => {
        render(<ViewOrder />);
        const linkElement = screen.getByRole("addbutton");
    });

    test('renders order table', () => {
        render(<ViewOrder />);
        const tableElement = screen.getByRole('table');
        expect(tableElement).toBeInTheDocument();
    });

});