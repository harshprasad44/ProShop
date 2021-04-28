import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
        style={{ borderRadius: "50px", borderColor: "black" }}
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        <i
          style={{ color: "black", border: "1px solid", padding: "8px", borderRadius: "24px" }}
          className="fas fa-search"
        ></i>
      </Button>
    </Form>
  );
};

export default SearchBox;
