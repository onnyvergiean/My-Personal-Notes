import React, { useState } from 'react';
import NoteInput from '../Components/NoteInput';
import NoteList from '../Components/NoteList';
import NoteSearch from '../Components/NoteSearch';
import NoteTitle from '../Components/NoteTitle';
import { getInitialData, showFormattedDate } from '../Utils/data.js';
export default function NotesApps() {
  const [initialData, setInitialData] = useState(getInitialData());
  const [note, setNote] = useState(initialData);
  const inputNoteHandler = ({ title, body }) => {
    let newNote = [];
    setNote(() => {
      newNote = [
        ...note,
        {
          id: +new Date(),
          title,
          body,
          createdAt: showFormattedDate(new Date()),
          archived: false,
        },
      ];
      return newNote;
    });
    setInitialData(newNote);
  };

  const deleteNoteHandler = (id) => {
    const filteredNote = note.filter((note) => note.id !== id);
    setNote(filteredNote);
    setInitialData(filteredNote);
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
    setInitialData(note);
  };

  const resetNoteHandler = () => {
    setNote(initialData);
  };
  const searchNoteHandler = (searchTitle) => {
    resetNoteHandler();
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
