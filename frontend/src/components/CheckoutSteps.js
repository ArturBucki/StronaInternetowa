import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Zaloguj się</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Zaloguj się</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>Adres</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Adres</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>Płatność</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Płatność</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>Zamówienie</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Zamówienie</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
}

export default CheckoutSteps;
