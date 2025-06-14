const myLibrary = [];


function Books(Name, Author, Year, Synopsis, Read, ID) {
    this.Name = Name;
    this.Author = Author;
    this.Year = Year;
    this.Synopsis = Synopsis;
    this.Read = Read;
    this.ID = ID;
}

function addBooks() {
    myLibrary.push(new Books(`${document.getElementById('name').value}`, 
    `${document.getElementById('author').value}`, `${document.getElementById('year').value}`, 
    `${document.getElementById('synopsis').value}`, `${false}`))
}

document.getElementById('form').addEventListener("submit", (e) => {
    e.preventDefault();
    addBooks();
    console.log(myLibrary);
}
)