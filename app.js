const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      decsribe: 'Note title',
      demandOption: true,
      type: 'string'
    }, 
    body: {
      decsribe: "Note body",
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      decsribe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title)
  }
})

// Listing command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  builder: {
    title: {
      decsribe: 'Note title',
      type: 'string'
    }, 
    body: {
      decsribe: "Note body",
      type: 'string'
    }
  },
  handler: () => {
    notes.listNotes()
  }
})

// Reading commands
yargs.command({
  command: 'read',
  decsribe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      type: 'string',
      demandOption: true
    }
  },
  handler: (argv) => {
    notes.readNote(argv.title)
  }
})

yargs.parse()
