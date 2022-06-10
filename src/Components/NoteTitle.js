import React from 'react';
import { Container } from 'react-bootstrap';

export default function NoteTitle({ title }) {
  return (
    <Container>
      <h2 className="mb-4">Notes List {title}</h2>
    </Container>
  );
}
