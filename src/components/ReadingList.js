import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    useRouteMatch,
    useParams
} from "react-router-dom";

import BookForm from "./BookForm";
import Book from './Book';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Modal, Backdrop, Fade, Typography } from '@material-ui/core';

const READINGLIST_URL = "https://hokodo-frontend-interview.netlify.com/data.json";

const getReadingList = () => {
    return axios.get(READINGLIST_URL);
};

// cloud name dg8ckygz0
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        minWidth: 600,
        // margin: '0px!important',
        border: '2px solid red',
    },
    listItemText: {
        border: '2px solid red',
        alignItems: 'left',
        justifyContent: 'left',
    },
    booklist: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        minWidth: 600,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '60%',
        outline: 'none',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    boxContainer: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        margin: '0px!important',
    },
    box: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    grid: {

    },
}));


const BookList = () => {
    let match = useRouteMatch();

    const fetchData = async () => {
        const response = await fetch(
            `https://hokodo-frontend-interview.netlify.com/data.json`
        );
        const data = await response.json();
    };

    fetchData();

    const booksData = [
        {
            "id": "872179f2-4de2-4cde-a259-ee470d83d515",
            "cover": "https:\/\/lorempixel.com\/640\/480\/?ee470d83d515",
            "isbn": "9781593275846",
            "title": "Eloquent JavaScript, Second Edition",
            "subtitle": "A Modern Introduction to Programming",
            "author": "Mrs. John Doe",
            "published": "2014-12-14T00:00:00.000Z",
            "publisher": "No Starch Press",
            "pages": 472,
            "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
            "website": "http://eloquentjavascript.net/"
        },
        {
            "id": "89cae71c-fbe5-445c-8299-6de7a88ea5ab",
            "cover": "https:\/\/lorempixel.com\/640\/480\/?6de7a88ea5ab",
            "isbn": "9781449331818",
            "title": "Learning JavaScript Design Patterns",
            "subtitle": "A JavaScript and jQuery Developer's Guide",
            "author": "Prof. John Doe",
            "published": "2012-07-01T00:00:00.000Z",
            "publisher": "O'Reilly Media",
            "pages": 254,
            "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
            "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
        },
        {
            "id": "5f2f7db1-2373-4930-b1e0-9affb811698f",
            "cover": "https:\/\/lorempixel.com\/640\/480\/?9affb811698f",
            "isbn": "9781449365035",
            "title": "Speaking JavaScript",
            "subtitle": "An In-Depth Guide for Programmers",
            "author": "Prof. Jane Doe",
            "published": "2014-02-01T00:00:00.000Z",
            "publisher": "O'Reilly Media",
            "pages": 460,
            "description": "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
            "website": "http://speakingjs.com/"
        },
        {
            "id": "1805d513-7e3b-49fd-aace-9d8b21dd8f74",
            "cover": "https:\/\/lorempixel.com\/640\/480\/?9d8b21dd8f74",
            "isbn": "9781491950296",
            "title": "Programming JavaScript Applications",
            "subtitle": "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
            "author": "Mr. John Doe",
            "published": "2014-07-01T00:00:00.000Z",
            "publisher": "O'Reilly Media",
            "pages": 254,
            "description": "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
            "website": "http://chimera.labs.oreilly.com/books/1234000000262/index.html"
        },
        {
            "id": "17da4aea-6e54-43a3-aece-11b1362de170",
            "cover": "https:\/\/lorempixel.com\/640\/480\/?11b1362de170",
            "isbn": "9781593277574",
            "title": "Understanding ECMAScript 6",
            "subtitle": "The Definitive Guide for JavaScript Developers",
            "author": "Dr. John Doe",
            "published": "2016-09-03T00:00:00.000Z",
            "publisher": "No Starch Press",
            "pages": 352,
            "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
            "website": "https://leanpub.com/understandinges6/read"
        },
        {
            "id": "c84fe861-5bec-4dde-a277-2795ec273044",
            "cover": "https:\/\/lorempixel.com\/640\/480\/?2795ec273044",
            "isbn": "9781491904244",
            "title": "You Don't Know JS",
            "subtitle": "ES6 & Beyond",
            "author": "Dr. Jane Doe",
            "published": "2015-12-27T00:00:00.000Z",
            "publisher": "O'Reilly Media",
            "pages": 278,
            "description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the \"You Don’t Know JS\" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
            "website": "https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond"
        },
        {
            "id": "808c1c51-2330-4f40-8bab-0020e626db36",
            "cover": "https:\/\/lorempixel.com\/640\/480\/?0020e626db36",
            "isbn": "9781449325862",
            "title": "Git Pocket Guide",
            "subtitle": "A Working Introduction",
            "author": "Mr. Jane Doe",
            "published": "2013-08-02T00:00:00.000Z",
            "publisher": "O'Reilly Media",
            "pages": 234,
            "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.",
            "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
        },
        {
            "id": "3ae372e9-b500-4f37-aacf-5569cae3bf77",
            "cover": "https:\/\/lorempixel.com\/640\/480\/?5569cae3bf77",
            "isbn": "9781449337711",
            "title": "Designing Evolvable Web APIs with ASP.NET",
            "subtitle": "Harnessing the Power of the Web",
            "author": "Prof. John Doe",
            "published": "2014-04-07T00:00:00.000Z",
            "publisher": "O'Reilly Media",
            "pages": 538,
            "description": "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
            "website": "http://chimera.labs.oreilly.com/books/1234000001708/index.html"
        },
        {
            "id": "eb422d6f-1d2a-4dec-bc97-d0e77e0ed750",
            "cover": "https:\/\/lorempixel.com\/640\/480\/?d0e77e0ed750",
            "isbn": "unknown",
            "title": "Un début dans la vie",
            "subtitle": "La Comédie Humaine",
            "author": "Honoré de Balzac",
            "published": "1844-01-01T00:00:00.000Z"
        },
        {
            "id": "1be8799b-b9f9-4eed-a1e9-99cf587a68df",
            "cover": "https:\/\/lorempixel.com\/640\/480\/?99cf587a68df",
            "isbn": "unknown",
            "title": "Le père Goriot",
            "subtitle": "La Comédie Humaine",
            "author": "Honoré de Balzac",
            "published": "1835-01-01T00:00:00.000Z"
        }
    ]

    let { bookId } = useParams();
    console.log(bookId)

    const classes = useStyles();

    // useState hooks
    const [checked, setChecked] = React.useState([1]);
    const [books, setBooks] = useState(booksData);
    const [booksEmptyBool, setBooksEmptyBool] = useState(true);
    const [bookParam, setBookParam] = useState(false);
    // const [bookItem, setBookItemm] = useState([]);

    const [booksSelected, setBooksSelected] = useState([]);
    const [booksFiltered, setBooksFiltered] = useState([]);
    //Track is edit clicked or not
    const [editId, setEdit] = useState(null);

    const [inputValue, setInputValue] = useState("");

    const bookItem = books.find(book => book.id === bookId);

    // update localStorage on data change
    useEffect(() => {
        console.log('useEffect 1')
        console.log(bookId)
        if (bookItem !== undefined) {
            setBookParam(true)
        }
        if (bookId !== undefined) {
            console.log("hoooorah create filters here?")
            console.log(books)

            let result = books.filter(book => {
                return book.id === bookId
            })

            console.log(result[0].author)

            const booksFilteredTemp = books.filter(book => book.author === result[0].author);
            console.log(booksFilteredTemp)
            setBooksFiltered(booksFilteredTemp)
        }

        // localStorage.setItem('books-omni-dev1', JSON.stringify(books));

        if (books.length === 0) {
            setBooksEmptyBool(false);
        }
    }, [books, bookItem, bookId]);


    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEdit(null);
    };


    const handleToggle = (value) => () => {

        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        completeBook(value);
        setChecked(newChecked);
    };

    const handleEditChange = (id, text) => {

        setEdit(id);
        setInputValue(text);
        handleOpen();
    };

    const addBook = (book) => {
        if (!book.title || /^\s*$/.test(book.title)) {
            return;
        }
        if (books.length == 0) {
            setBooksEmptyBool(!booksEmptyBool);
        }

        const newBooks = [book, ...books];
        setBooks(newBooks);

    };

    const removeBook = (id) => {
        const removedArr = [...books].filter((bookId) => bookId.id !== id);

        setBooks(removedArr);
    };

    const completeBook = (id) => {
        let updatedBooks = books.map((book) => {
            if (book.id === id) {
                book.complete = !book.complete;
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    const editBook = (id, title, description, dueDate, complete, imagePath) => {

        let editBooks = books.map((book) => {
            if (book.id === id) {
                book.title = title;
                book.description = description;
                book.dueDate = dueDate;
                book.complete = complete;
                book.imagePath = imagePath;
            }
            return book;
        });
        setBooks(editBooks);
        setEdit(false);
    };

    const BookListFull = () => {

        return (

            books.map((book, index) => {

                return (

                    <Book
                        key={index}
                        id={book.id}
                        cover={book.cover}
                        isbn={book.isbn}
                        title={book.title}
                        subTitle={book.subtitle}
                        author={book.author}
                        published={book.published}
                        publisher={book.publisher}
                        pages={book.pages}
                        description={book.description}
                        website={book.website}
                        dueDate={book.dueDate}
                        complete={book.complete}
                        imagePath={book.imagePath}
                        handleToggle={(e) => handleToggle(e)}
                        checked={checked}
                        books={booksSelected}
                        setBooks={setBooks}
                        completeBook={completeBook}
                        removeBook={removeBook}
                        editBook={editBook}
                        handleEditChange={handleEditChange}
                        editId={editId}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        isListItem={true}
                        setChecked={setChecked}
                    />

                );
            })

        )
    }
    const BookFull = () => {
        return (

            <Book
                booksFiltered={booksFiltered}
                key={bookItem.id}
                id={bookItem.id}
                cover={bookItem.cover}
                isbn={bookItem.isbn}
                title={bookItem.title}
                subTitle={bookItem.subtitle}
                author={bookItem.author}
                published={bookItem.published}
                publisher={bookItem.publisher}
                pages={bookItem.pages}
                description={bookItem.description}
                website={bookItem.website}
                dueDate={bookItem.dueDate}
                complete={bookItem.complete}
                imagePath={bookItem.imagePath}
                handleToggle={(e) => handleToggle(e)}
                checked={checked}
                books={booksSelected}
                setBooks={setBooks}
                completeBook={completeBook}
                removeBook={removeBook}
                editBook={editBook}
                handleEditChange={handleEditChange}
                editId={editId}
                inputValue={inputValue}
                setInputValue={setInputValue}
                isListItem={false}
                setChecked={setChecked}
            />

        );

    }

    return (

        <React.Fragment>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.modal}>
                        <BookForm onClose={handleClose} onSubmit={addBook} books={books} editId={editId} editBook={editBook} setEdit={setEdit} />
                    </div>
                </Fade>
            </Modal>
            <Route exact path={`${match.url}/:bookId`}

                render={() => (
                    <div style={{ textAlign: 'center' }}>Please select a product.</div>
                )} />

            <Grid container spacing={3} className={classes.boxContainer}>
                {!bookParam && <Grid item xs={12} className={classes.grid}>
                    <Box className={classes.box}>
                        <Typography variant="h3">Reading List</Typography>
                    </Box>
                </Grid>
                }
                <Grid item xs={12}>
                    <Box className={classes.box}></Box>
                </Grid>
                <Grid item xs={12}>
                    {bookParam
                        ? <BookFull />
                        : <BookListFull />
                    }
                </Grid>
            </Grid>

        </React.Fragment>
    );
}
export default BookList;