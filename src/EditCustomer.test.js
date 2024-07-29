import { render, screen } from '@testing-library/react';
import EditCustomer from './EditCustomer';
import { BrowserRouter, useNavigate } from 'react-router-dom'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

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
describe("EditCustomerComponent", () => {
    test("render update customer title", () => {
        render(<BrowserRouter><EditCustomer /></BrowserRouter>);
        const title = screen.getByRole("heading");
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent("UPDATE Customer'S DATA'S");
    });

    test("render update customer id", () => {
        render(<BrowserRouter><EditCustomer /></BrowserRouter>);
        const id = screen.getByRole("customerid");
        expect(id).toBeInTheDocument();
        expect(id).toHaveTextContent("Customer ID :");
    });

    test('render update order id field', () => {
        render(<EditCustomer />);
        const idField = screen.getByRole("idField");
        expect(idField).toBeInTheDocument();
        expect(idField).toHaveTextContent("");
    });

    test("render update customer Name", () => {
        render(<BrowserRouter><EditCustomer /></BrowserRouter>);
        const name = screen.getByRole("customername");
        expect(name).toBeInTheDocument();
        expect(name).toHaveTextContent("Customer Name :");
    });

    test('render update order name field', () => {
        render(<EditCustomer />);
        const nameField = screen.getByRole("namefield");
        expect(nameField).toBeInTheDocument();
        expect(nameField).toHaveTextContent("");
    });

    test("render update customer Mobile number", () => {
        render(<BrowserRouter><EditCustomer /></BrowserRouter>);
        const mobile = screen.getByRole("mobilenumber");
        expect(mobile).toBeInTheDocument();
        expect(mobile).toHaveTextContent("Mobile Number :");
    });

    test('render update order mobile field', () => {
        render(<EditCustomer />);
        const mobileField = screen.getByRole("mobilefield");
        expect(mobileField).toBeInTheDocument();
        expect(mobileField).toHaveTextContent("");
    });

    test("render update customer email", () => {
        render(<BrowserRouter><EditCustomer /></BrowserRouter>);
        const email = screen.getByRole("email");
        expect(email).toBeInTheDocument();
        expect(email).toHaveTextContent("Email Id :");
    });

    test('render update order email field', () => {
        render(<EditCustomer />);
        const emailField = screen.getByRole("emailfield");
        expect(emailField).toBeInTheDocument();
        expect(emailField).toHaveTextContent("");
    });

    test("render update customer address", () => {
        render(<BrowserRouter><EditCustomer /></BrowserRouter>);
        const address = screen.getByRole("address");
        expect(address).toBeInTheDocument();
        expect(address).toHaveTextContent("Address :");
    });

    test('render update order address field', () => {
        render(<EditCustomer />);
        const addressField = screen.getByRole("addressfield");
        expect(addressField).toBeInTheDocument();
        expect(addressField).toHaveTextContent("");
    });

    test('render update order button', () => {
        render(<EditCustomer />);
        const button = screen.getByRole("updatebutton");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Update");
    });
});