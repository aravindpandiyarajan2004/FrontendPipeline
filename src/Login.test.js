import { render, screen } from '@testing-library/react';
import Login from './Login';

jest.mock("react-router-dom");

describe("LoginComponent", () => {

    test("render login title", () => {
        render(<Login />);
        const linkElement = screen.getByRole("heading");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Sign In");
    });

    test("render login username", () => {
        render(<Login />);
        const linkElement = screen.getByRole("username");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("UserName:");
    });

    test("render login username field", () => {
        render(<Login />);
        const linkElement = screen.getByRole("userfield");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("");
    });

    test("render login password", () => {
        render(<Login />);
        const linkElement = screen.getByRole("password");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Password:");
    });

    test("render login password field", () => {
        render(<Login />);
        const linkElement = screen.getByRole("passfield");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("");
    });

    test("render login button", () => {
        render(<Login />);
        const linkElement = screen.getByRole("login");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Login");
    });

});