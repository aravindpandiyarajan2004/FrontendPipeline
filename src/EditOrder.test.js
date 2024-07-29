import { render, screen } from '@testing-library/react';
import EditOrder from './EditOrder';
import { BrowserRouter, useNavigate } from 'react-router-dom'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
// import { BrowserRouter } from 'react-router-dom';
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

const mock = new MockAdapter(axios);

const mockNavigate = jest.fn();
useNavigate.mockReturnValue(mockNavigate);



afterEach(() => {
    mock.reset();
});

describe("EditOrderComponent", () => {
    test('render update order', () => {
        render(<EditOrder />);
        const title = screen.getByRole("heading");
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent("UPDATE ORDER'S DATA'S");
    });

    it('render update order id', () => {
        render(<EditOrder />);
        const id = screen.getByRole("orderid");
        expect(id).toBeInTheDocument();
        expect(id).toHaveTextContent("Order Id :");

    })

    test('render update order id field', () => {
        render(<EditOrder />);
        const idField = screen.getByRole("idfield");
        expect(idField).toBeInTheDocument();
        expect(idField).toHaveTextContent("");
    });

    test('render update order item name', () => {
        render(<EditOrder />);
        const item = screen.getByRole("itemname");
        expect(item).toBeInTheDocument();
        expect(item).toHaveTextContent("Item Name:");

    });

    test('render update order item field', () => {
        render(<EditOrder />);
        const itemField = screen.getByRole("itemfield");
        expect(itemField).toBeInTheDocument();
        expect(itemField).toHaveTextContent("");
    });

    test('render update order price', () => {
        render(<EditOrder />);
        const price = screen.getByRole("price");
        expect(price).toBeInTheDocument();
        expect(price).toHaveTextContent("Price:");

    });

    test('render update order price field', () => {
        render(<EditOrder />);
        const priceField = screen.getByRole("pricefield");
        expect(priceField).toBeInTheDocument();
        expect(priceField).toHaveTextContent("");
    });

    test('render update order button', () => {
        render(<EditOrder />);
        const button = screen.getByRole("updatebutton");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Update");
    });

});
