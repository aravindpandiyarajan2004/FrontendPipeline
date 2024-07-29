import { render, screen } from '@testing-library/react';
import AddCustomer from './AddCustomer';
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


jest.mock('axios');
jest.mock('react-router-dom');
afterEach(() => {
    mock.reset();
});
describe("AddCustomerComponent", () => {
    test('renders Add Customer title ', () => {
        render(<BrowserRouter><AddCustomer /></BrowserRouter>);
        const linkElement = screen.getByRole("heading");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("ADD Customer DATA");
    });

    test('renders Add Customer Name ', () => {
        render(<AddCustomer />);

        const linkElement = screen.getByRole("customername");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Customer Name");
    });

    test('renders Add Customer Name text field ', () => {
        render(<AddCustomer />);
        const linkElement = screen.getByRole("customerfield");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("");
    });

    test('renders Add Customer Mobile ', () => {
        render(<AddCustomer />);
        const linkElement = screen.getByRole("mobilenumber");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Mobile Number :");
    });

    test('renders Add Customer Mobile Number text field ', () => {
        render(<AddCustomer />);
        const linkElement = screen.getByRole("mobilefield");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("");
    });



    test('renders Add Customer email', () => {
        render(<AddCustomer />);
        const linkElement = screen.getByRole("emailid");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Email Id :");
    });

    test('renders Add Customer email text field ', () => {
        render(<AddCustomer />);
        const linkElement = screen.getByRole("emailfield");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("");
    });

    test('renders Add Customer address', () => {
        render(<AddCustomer />);
        const linkElement = screen.getByRole("address");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Address :");
    });

    test('renders Add Customer address field ', () => {
        render(<AddCustomer />);
        const linkElement = screen.getByRole("addressfield");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("");
    });

    test('renders Add order id', () => {

        render(<BrowserRouter>
            <AddCustomer />
        </BrowserRouter>);
        const linkElement = screen.getByRole("orderid");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Order ID");
    });

});

test('renders Add order id fields', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("orderidfield");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.options[0].text).toBe("Select One");
});

test('renders Submit button', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("submitbutton");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Submit");
});
