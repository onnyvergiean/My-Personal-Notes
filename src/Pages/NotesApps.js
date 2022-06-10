import React, { useState } from 'react';
import NoteInput from '../Components/NoteInput';
import NoteList from '../Components/NoteList';
import NoteSearch from '../Components/NoteSearch';
import NoteTitle from '../Components/NoteTitle';
import { getInitialData, showFormattedDate } from '../Utils/data.js';
export default function NotesApps() {
  const [note, setNote] = useState(getInitialData());
  const inputNoteHandler = ({ title, body }) => {
    setNote([
      ...note,
      {
        id: +new Date(),
        title,
        body,
        createdAt: showFormattedDate(new Date()),
        archived: false,
      },
    ]);
  };

  const deleteNoteHandler = (id) => {
    setNote(note.filter((note) => note.id !== id));
  };
  const archiveNoteHandler = (id) => {
    setNote(
      note.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived;
        }
        return note;
      })
    );
  };

  const searchNoteHandler = (searchTitle) => {
    setNote(getInitialData());
    setNote((prevState) => {
      return prevState.filter((note) =>
        note.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    });
  };

  return (
    <>
      <NoteInput addInput={inputNoteHandler} />
      <NoteSearch onSearchNote={searchNoteHandler} />
      <NoteTitle />
      <NoteList
        notes={note.filter((item) => !item.archived)}
        onDeleteNote={deleteNoteHandler}
        onArchiveNote={archiveNoteHandler}
      />
      <NoteTitle title="Archived" />
      <NoteList
        notes={note.filter((item) => item.archived)}
        onDeleteNote={deleteNoteHandler}
        onArchiveNote={archiveNoteHandler}
      />
    </>
  );
}
