import React from 'react';
import { Card, CloseButton, Row, Col } from 'react-bootstrap';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import { showFormattedDate } from '../Utils/data.js';
export default function NoteItem(props) {
  const { id, title, body, createdAt, onDeleteNote, archived, onArchiveNote } =
    props;

  const handleDelete = (id) => {
    onDeleteNote(id);
  };
  const handleArchive = (id) => {
    onArchiveNote(id);
  };
  return (
    <Col xs={6} sm={6} md={4} lg={3}>
      <Card
        border="secondary"
        style={{
          width: '18rem',
          minHeight: '350px',
        }}
      >
        <Card.Header
          style={
            archived
              ? { backgroundColor: '#e53170', color: '#fffffe' }
              : { backgroundColor: '#bae8e8', color: '#2d334a' }
          }
        >
          <small>Created {showFormattedDate(createdAt)}</small>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={10} sm={10} md={10} lg={10}>
              <Card.Title>{title}</Card.Title>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2}>
              <CloseButton onClick={() => handleDelete(id)} />
            </Col>
          </Row>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
        {archived ? (
          <BiArchiveOut onClick={() => handleArchive(id)} />
        ) : (
          <BiArchiveIn onClick={() => handleArchive(id)} />
        )}
      </Card>
    </Col>
  );
}
