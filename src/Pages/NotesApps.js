import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import NoteInput from '../Components/NoteInput';
import NoteList from '../Components/NoteList';
import NoteSearch from '../Components/NoteSearch';
import NoteTitle from '../Components/NoteTitle';
import { getInitialData, showFormattedDate } from '../Utils/data.js';

export default function NotesApps() {
  const [initialData, setInitialData] = useState(getInitialData());
  const [note, setNote] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const inputNoteHandler = ({ title, body }) => {
    let newNote = [
      ...note,
      {
        id: +new Date(),
        title,
        body,
        createdAt: showFormattedDate(new Date()),
        archived: false,
      },
    ];
    setNote(newNote);
    setInitialData(newNote);
  };

  const deleteNoteHandler = (id) => {
    let filteredNote = note.filter((note) => note.id !== id);
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
    setSearchTerm(searchTitle);
  };

  return (
    <>
      <ToastContainer limit={1} />
      <NoteInput addInput={inputNoteHandler} />
      <NoteSearch onSearchNote={searchNoteHandler} />
      <NoteTitle />
      <NoteList
        searchTerm={searchTerm}
        notes={note.filter((note) => !note.archived)}
        onDeleteNote={deleteNoteHandler}
        onArchiveNote={archiveNoteHandler}
      />
      <NoteTitle title="Archived" />
      <NoteList
        searchTerm={searchTerm}
        notes={note.filter((note) => note.archived)}
        onDeleteNote={deleteNoteHandler}
        onArchiveNote={archiveNoteHandler}
      />
    </>
  );
}
