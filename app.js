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
  handler: function (argv) {
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
  handler: function (argv) {
    notes.removeNote(argv.title)
  }
})

// Listing command
yargs.command({
  command: 'list',
  decsribe: 'List your notes',
  handler: function () {
    console.log("Listing out all notes")
  }
})

// Reading commands
yargs.command({
  command: 'read',
  decsribe: 'Read a note',
  handler: function () {
    console.log('Reading a note')
  }
})

yargs.parse()
