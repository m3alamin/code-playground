const argv = require('yargs').argv;
var notes = require('./notes');

notes.add({
    title: argv.title,
    body: argv.body
}, (err, msg) => {
    if(err) {
        console.log(err);
    } else {
        console.log(msg);
    }
});
