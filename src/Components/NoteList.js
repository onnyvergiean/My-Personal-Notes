import React from 'react';
import NoteItem from './NoteItem';
import { Row, Container } from 'react-bootstrap';

export default function NoteList(props) {
  const { notes, onDeleteNote, onArchiveNote, searchTerm } = props;
  let renderedNotes = '';

  if (notes.length > 0) {
    if (searchTerm !== '') {
      let filteredNote = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      renderedNotes = filteredNote.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          onDeleteNote={onDeleteNote}
          onArchiveNote={onArchiveNote}
        />
      ));
    } else {
      renderedNotes = notes.map((note) => {
        return (
          <NoteItem
            key={note.id}
            {...note}
            onDeleteNote={onDeleteNote}
            onArchiveNote={onArchiveNote}
          />
        );
      });
    }
  } else {
    return <h5 className="empty-notes">Empty Notes</h5>;
  }

  return (
    <Container className="mt-3">
      <Row className="g-4 mb-4">{renderedNotes}</Row>
    </Container>
  );
}
