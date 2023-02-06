import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

function SearchBox() {
  const location = useLocation();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?keyword=${keyword}&page=1`);
    } else {
      navigate("/");
    }
  };
  return (
    <Form className="d-flex w-70" onSubmit={submitHandler}>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>

      <Button
        style={{ marginRight: "30px" }}
        type="submit"
        variant="outline-success"
        className="p-2"
      >
        Szukaj
      </Button>
    </Form>
  );
}

export default SearchBox;
