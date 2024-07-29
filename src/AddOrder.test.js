import { render, screen } from '@testing-library/react';
import AddOrder from './AddOrder';


jest.mock('axios');
jest.mock('react-router-dom');

describe("AddOrderComponent", () => {
    test('renders Add orders title ', () => {
        render(<AddOrder />);
        const linkElement = screen.getByTestId("heading");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("ADD Order DATA");
    });

    test('renders Add orders Name ', () => {
        render(<AddOrder />);
        const linkElement = screen.getByRole("name");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Item Name:");
    });

    test('renders Add orders Name text field ', () => {
        render(<AddOrder />);
        const linkElement = screen.getByRole("item");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("");
    });

    test('renders Add orders price ', () => {
        render(<AddOrder />);
        const linkElement = screen.getByRole("price");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Price :");
    });

    test('renders Add orders price text field ', () => {
        render(<AddOrder />);
        const linkElement = screen.getByRole("itemprice");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("");
    });

    test('renders Add orders submit button', () => {
        render(<AddOrder />);
        const linkElement = screen.getByRole("submitbutton");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Submit");
    });
});