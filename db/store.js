//util.promisify

const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class Store {

read(){
    return readFileAsync('./db.json', 'utf8')
}

write(note){
    return writeFileAsync('./db.json', JSON.stringify(note))
}

getNotes() {
    return this.read().then((notes) => {
         //parse notes to return them as partes notes
         let parsedNotes
         try{
             parsedNotes=[].concat(JSON.parse(notes))
         } catch(error){
             parsedNotes=[]
         }
return parsedNotes 

    })
}

addNote(note) {

}


deleteNote(id) {
    
}





}


module.exports = new Store();