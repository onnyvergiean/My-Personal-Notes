import React, { useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';

export default function NoteInput({ addInput }) {
  const [noteInput, setNoteInput] = useState({
    title: '',
    body: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNoteInput({
      ...noteInput,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    const { title, body } = noteInput;
    event.preventDefault();
    addInput({ title, body });
    setNoteInput({
      title: '',
      body: '',
    });
  };

  const handleTitleLimit = (event) => {
    const { value } = event.target;
    let title = '';
    value.length > 40 ? (title = value.substring(0, 40)) : (title = value);
    setNoteInput({
      ...noteInput,
      title,
    });
  };
  return (
    <Container>
      <h2 className="title-body">Create a New Note</h2>
      <p className="max-string">Max Character {noteInput.title.length}/40</p>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center mb-3">
          <Col xs={12} sm={12} md={12} lg={7}>
            <Form.Control
              placeholder="Title"
              autoComplete="false"
              name="title"
              value={noteInput.title}
              onChange={handleTitleLimit}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={12} lg={7}>
            <Form.Control
              as="textarea"
              placeholder="Notes"
              style={{ height: '100px' }}
              name="body"
              value={noteInput.body}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <button className="button-body" type="submit">
            Add New Note
          </button>
        </Row>
      </Form>
    </Container>
  );
}
