import { render, screen } from '@testing-library/react';
import Signup from './Signup';

jest.mock("react-router-dom");

describe("SingupComponent", () => {
    test("render signup title", () => {
        render(<Signup />);
        const linkElement = screen.getByRole("heading");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Sign Up");
    });

    test("render signup username", () => {
        render(<Signup />);
        const linkElement = screen.getByRole("username");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("UserName:");
    });

    test("render signup username field", () => {
        render(<Signup />);
        const linkElement = screen.getByRole("userfield");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("");
    });

    test("render signup name", () => {
        render(<Signup />);
        const linkElement = screen.getByRole("name");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Name:");
    });

    test("render signup name field", () => {
        render(<Signup />);
        const linkElement = screen.getByRole("namefield");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("");
    });

    test("render signup email", () => {
        render(<Signup />);
        const linkElement = screen.getByRole("email");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Email Id:");
    });

    test("render signup email field", () => {
        render(<Signup />);
        const linkElement = screen.getByRole("emailfield");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("");
    });

    test("render signup password", () => {
        render(<Signup />);
        const linkElement = screen.getByRole("password");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Password:");
    });

    test("render signup password field", () => {
        render(<Signup />);
        const linkElement = screen.getByRole("passfield");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("");
    });

    test("render signup confirm password", () => {
        render(<Signup />);
        const linkElement = screen.getByRole("cpass");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Confirm Password:");
    });

    test("render signup confirm password field", () => {
        render(<Signup />);
        const linkElement = screen.getByRole("cfield");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("");
    });

    test("render login button", () => {
        render(<Signup />);
        const linkElement = screen.getByRole("signup");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent("Signup");
    });

});