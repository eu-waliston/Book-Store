const App = require('./App');

const app = new App();

app.createAuthor('J. R. Tolkien','British', '...');
app.createAuthor('Rick Riordan','American', '...');

const autors = app.getAuthor();

app.createBook('O Hobbit', '....', 'Fantasy', 300, autors[0], '...', 19.99, 100)
app.createBook('A Sociedade do anel', '....', 'Fantasy', 300, autors[0], '...', 19.99, 100)
app.createBook('OLAdrão de raios', '....', 'Fantasy', 300, autors[1], '...', 19.99, 100)
app.createBook('A Piramide vermelha', '....', 'Fantasy', 300, autors[1], '...', 19.99, 100)

const books = app.getBooks();

const user = app.createUser('waliston','waliston@email.com', '12345' );

const pessoa = app.getUsers();

const items = [
    {
        product: books[0],
        quantity: 2
    },
    {
        product: books[1],
        quantity: 2
    },
    {
        product: books[3],
        quantity: 2
    }
];

//app.createOrder(items, pessoa)
console.log(user)
//app.showDatabase();