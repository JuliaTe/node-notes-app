const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title === title)

    if (!duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const filtered = notes.filter(note => note.title !== title)
  if (filtered.length == notes.length) {
    console.log(chalk.red.inverse("Note you tried to delete doesn't exist"))
  } else {
    saveNotes(filtered)
    console.log(chalk.yellow.inverse(`Note ${title} has been deleted`))
    console.log(filtered)
  }
}

const listNotes = () => {
  debugger
  const notes = loadNotes();
  notes.forEach(note => console.log(`${chalk.yellow.inverse(note.title)} ${chalk.green.inverse(note.body)}`))
}

const readNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((note) => note.title === title)
  if (foundNote) {
    console.log(`${chalk.blue.inverse(foundNote.title)}: ${foundNote.body}`)
  } else {
    console.log(chalk.red("What note????"))
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote
}