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
        card.className = 'card';

        const title = document.createElement('h2');
        title.textContent = element.Name;

        const author = document.createElement('p');
        author.textContent = `Author: ${element.Author}`;
        
        const year = document.createElement('p');
        year.textContent = `Year: ${element.Year}`;
        
        const synopsis = document.createElement('p');
        synopsis.textContent = `Synopsis: ${element.Synopsis}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        const readButton = document.createElement('button');
        readButton.textContent = element.Read ? 'Read' : 'Not Read';
        readButton.addEventListener('click', () => {
            element.Read = !element.Read;
            readButton.textContent = element.Read ? 'Read' : 'Not Read';
        });
        
        card.appendChild(readButton);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(year);
        card.appendChild(synopsis);
        card.appendChild(deleteButton);
        deleteButton.addEventListener('click', () => {
            const index = myLibrary.findIndex(book => book.ID === element.ID);
            if (index !== -1) {
                myLibrary.splice(index, 1);
                displayLibrary(myLibrary);
            }
        });
        container.appendChild(card);
    });
}

displayLibrary(myLibrary);