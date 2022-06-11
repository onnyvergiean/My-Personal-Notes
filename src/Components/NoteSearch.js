import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
export default function NoteSearch({ onSearchNote }) {
  const searchHandler = (event) => {
    const { value } = event.target;
    onSearchNote(value);
  };
  return (
    <Container className="mt-4 ">
      <h2 className="title-body">Search Note</h2>
      <Row className="justify-content-center mb-3">
        <Col xs={12} sm={12} md={12} lg={7}>
          <Form.Control
            placeholder="Search Title"
            autoComplete="false"
            name="title"
            className="mb-4"
            onChange={searchHandler}
          />
        </Col>
      </Row>
    </Container>
  );
}
