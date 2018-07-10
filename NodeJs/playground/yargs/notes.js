const fs = require('fs');

var notes = {};

var readFile = (callback) => {
    fs.readFile('notes.db', (err, data)=> {
        var notes = [];
        if(err) {
            return callback(err);
        } else {
            var notes = data.toString();
            notes = notes.length> 1 ? JSON.parse(notes): [];
            return callback(null, notes);
        }
    });
};

var writeFile = (notes, callback) => {
    fs.writeFile('notes.db', notes, (err) => {
        if(err) {
            return callback(err);
        }
        return callback(null, 'Note added');
    });
};

var checkDuplicateTitle = (title, notes) => {
    noteFiltered = notes.filter( (note) => {
        return note.title !== title;
    });

    return noteFiltered.length === notes.length;
};

notes.add = (note, callback) => {
    readFile((err, notes)=>{
        if(err) {
            return callback(err);
        } else {
            if(checkDuplicateTitle(note.title, notes)) {
                notes.push(note);
            } else {
                return callback("Title already taken");
            }

            var noteString = JSON.stringify(notes);
            writeFile(noteString, (err, msg) => {
                if(err) {
                    return callback(err);
                } else {
                    return callback(msg);
                }
            });
        }
    });
    
};

module.exports = notes;
