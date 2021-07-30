import React from "react";
import {
    BrowserRouter as Router,
    Link,
    useParams,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, Card, CardContent, Typography, Checkbox, Button, Paper } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        // minWidth: 600,
        margin: theme.spacing(2, 0),
        display: 'flex',
        justifyContent: 'space-between',
    },
    flexit: {
        display: 'flex',
    },
    flexitright: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    foo: props => ({
        backgroundColor: props.backgroundColor,
    }),
    bar: {
        // CSS property
        color: props => props.color,
    },
    todoComplete: {
        backgroundColor: '#4e493466',
    },
    todoOverdue: {
        backgroundColor: '#ff000057',
    },
    checkbox: {

        margin: '2px 9px 0px 0px',
    },
    media: {
        height: 100,
        width: 100,
    },
    itemImage: {
        width: '100%',
        padding: '0px',
    },
}));


const Book =

    ({
        booksFiltered,
        data,
        id,
        cover,
        isbn,
        title,
        subTitle,
        author,
        published,
        publisher,
        pages,
        description,
        website,
        dueDate,
        complete,
        checked,
        todos,
        setBooks,
        completeBook,
        removeBook,
        editBook,
        editId,
        handleEditChange,
        inputValue,
        setInputValue,
        isListItem,
        setChecked,
    }) => {
        console.log(booksFiltered)
        let { bookId } = useParams();

        if (data !== undefined) {

            const bookItem = data.find(book => book.id === bookId);

            id = bookItem.id;
            cover = bookItem.cover;
            isbn = bookItem.isbn;
            title = bookItem.title;
            subTitle = bookItem.title;
            author = bookItem.title;
            published = bookItem.title;
            publisher = bookItem.publisher;
            pages = bookItem.pages;
            description = bookItem.description;
            website = bookItem.website;
            dueDate = bookItem.dueDate;
            complete = bookItem.complete;
        }


        const props = { backgroundColor: 'black', color: 'white' };
        // Pass the props as the first argument of useStyles()
        const classes = useStyles(props);

        const today = new Date();

        const dateToday = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


        // complete ? classes.todoComplete : (dueDate < dateToday) && classes.todoOverdue;

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

        return (


            <Card key={id} className={clsx(classes.root, complete ? classes.todoComplete : (dueDate < dateToday) && classes.todoOverdue)}>


                {isListItem
                    ? <Grid container spacing={3} className={classes.boxContainer}>
                        <Grid item xs={12} sm={1} >
                            <img src={cover} title={cover} className={classes.itemImage} />

                        </Grid>

                        <Grid item xs={12} sm={8}>
                            <CardContent>
                                <Typography variant="h5" className={title} color="textSecondary" gutterBottom>
                                    {title}
                                </Typography>
                                <Typography variant="h5" className={author} color="textSecondary" gutterBottom>
                                    {author}
                                </Typography>
                            </CardContent>
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <CardContent className={classes.flexit}>


                                <Typography color="textSecondary">
                                    Read This
                                </Typography>

                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(id)}
                                    checked={complete}
                                    className={classes.checkbox}
                                />


                                <Link to={`/readinglist/${id}`}>More information
                                    <EditIcon /></Link>
                            </CardContent>
                        </Grid>
                    </Grid >
                    : <Grid container spacing={3} className={classes.boxContainer}>
                        <Grid item xs={12} sm={12} >
                            <a href="/readinglist" color="inherit" className={classes.flexitright}>
                                <Typography variant="h6" className={classes.title}>

                                    Back to list
                                    <EditIcon />
                                </Typography>
                            </a>
                            <Typography variant="h3" className={title} color="textSecondary" gutterBottom>
                                {title}
                            </Typography>


                            <Typography variant="h5" className={author} color="textSecondary" gutterBottom>
                                {author}
                            </Typography>
                            <Typography variant="h5" className={author} color="textSecondary" gutterBottom>
                                {isbn}
                            </Typography>
                            <img src={cover} title={cover} className={classes.itemImage} />

                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <CardContent>

                                {(!isListItem) && <Typography variant="body1" component="p">
                                    Other Books by {author}

                                    {booksFiltered.map((book) => {
                                        return (
                                            <p><a href={book.website} target="_blank" rel="noreferrer">{book.title}</a></p>
                                        );
                                    })}
                                </Typography>}


                            </CardContent>
                        </Grid>

                    </Grid>
                }

            </Card >



        );
    }

export default Book;