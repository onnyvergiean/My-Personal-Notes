import React from 'react';
import NoteItem from './NoteItem';
import { Row, Container } from 'react-bootstrap';

export default function NoteList(props) {
  const { notes, onDeleteNote, onArchiveNote } = props;
  return (
    <Container className="mt-3">
      <Row className="g-4 mb-4">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              {...note}
              onDeleteNote={onDeleteNote}
              onArchiveNote={onArchiveNote}
            />
          ))
        ) : (
          <h5 className="empty-notes">Empty Notes</h5>
        )}
      </Row>
    </Container>
  );
}
