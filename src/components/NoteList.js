import React from 'react'
import AddNewNote from './AddNewNote'
import Note from './Note'

const NoteList = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div className='notes-list'>
        {notes.map((note, id) =>(
            <Note key={id}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote ={handleDeleteNote}
            />
        ))}
        <AddNewNote  handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NoteList