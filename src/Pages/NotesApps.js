import React, { useState } from 'react';
import NoteInput from '../Components/NoteInput';
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

  return <NoteInput addInput={inputNoteHandler} />;
}
