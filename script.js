const myLibrary = [
    new Books('The Hobbit', 'JRR Tolkien', 1937, 'Fantasy Childrens Fiction', false, crypto.randomUUID()),
    new Books('The Alchemist', 'Paulo Coelho', 1988, 'Fantasy', true, crypto.randomUUID()),
    new Books('A Tale of Two Cities', 'Charles Dickens', 1859, 'Historical Fiction', true, crypto.randomUUID()),
];


function Books(Name, Author, Year, Synopsis, Read, ID) {
    this.Name = Name;
    this.Author = Author;
    this.Year = Year;
    this.Synopsis = Synopsis;
    this.Read = Read;
    this.ID = ID;
}

function addBooks() {
    myLibrary.push(new Books(document.getElementById('name').value, 
    document.getElementById('author').value, parseInt(document.getElementById('year').value), 
    document.getElementById('synopsis').value, false, crypto.randomUUID()))
}

document.getElementById('form').addEventListener("submit", (e) => {
    e.preventDefault();
    addBooks();
    console.log(myLibrary);
    document.getElementById('form').reset();
    displayLibrary(myLibrary);
}
)

function displayLibrary(bookArray) {
    const container = document.getElementById('body');
    container.innerHTML = '';

    bookArray.forEach(element => {
        const card = document.createElement('div');
        card.classname = 'card';

        const title = document.createElement('h2');
        title.textContent = element.Name;

        const author = document.createElement('p');
        author.textContent = `Author: ${element.Author}`;
        
        const year = document.createElement('p');
        year.textContent = `Year: ${element.Year}`;
        
        const synopsis = document.createElement('p');
        synopsis.textContent = `Synopsis: ${element.Synopsis}`;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(year);
        card.appendChild(synopsis);
        container.appendChild(card);
    });
}

displayLibrary(myLibrary);