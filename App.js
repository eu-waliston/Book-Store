const Database = require('./DataBase')
const User = require('./entities/User')
const Author = require("./entities/Author");
const Book = require("./entities/Livro");
const Poster = require("./entities/Poster");
const Order = require("./entities/Order");

module.exports = class App {
    static #database = new Database()

    createUser(name, email, password) {
        const user = new User(name, email, password)

        App.#database.saveUser();
    }

    getUsers() {
        App.#database.find('user');
    }

    createAuthor(name, nacionality, bio) {
        const author = new Author(name, nacionality, bio);
        App.#database.saveAuhor();
    }

    getAuthor() {
        return App.#database.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)

        App.#database.saveBook(book)
    }

    addBook(bookName, quantity) {
        App.#database.addBookToStock(bookName, quantity)
    }

//-----
    createPoster(name, description, heigth, width, inStock) {
        const poster = new Poster(name, description, heigth, width, inStock)

        App.#database.saveBook(poster)
    }

    addPoster(posterName, quantity) {
        App.#database.addPosterToStock(posterName, quantity)
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)

        order.data.items.forEach(({product, quantity}) => {
            if (product instanceof Book) {
                App.#database.removeBooksFromStock(product.name, quantity)
            } else if (product instanceof Poster) {
                App.#database.removePosterFromStock(product.name, quantity)
            }
        })
    }

    getOrders() {
        return App.#database.find('orders')
    }

    getBooks() {
        return App.#database.find('books')
    }

    showDatabase() {
        App.#database.showStorage();
    }
}