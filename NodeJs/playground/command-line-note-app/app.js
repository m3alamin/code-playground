const argv = require('yargs').argv;
var notes = require('./notes');

var command = argv._[0];

if(command === 'createNote') {
    var note = {
        title: argv.title,
        desc: argv.desc
    }
    notes.add(note, (err, message) => {
        if(err) {
            console.log(err);
        } else {
            console.log(message);
        }
    });
} else if(command === 'readNote') {
    var title = argv.title;
    console.log('Reading note');
}
