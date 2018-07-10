const fs = require('fs');

var note = {};

note.add = (note, callback) => {
    fs.writeFile('notes.db', JSON.stringify(note), (err) => {
        if(err) {
            return callback(err);
        }

        return callback(null, 'Note saved');
    });
};

module.exports = note;
