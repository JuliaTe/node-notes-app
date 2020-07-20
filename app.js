const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
    console.log('Adding a new note');
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note');
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

console.log(yargs.argv);

