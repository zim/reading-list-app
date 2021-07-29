import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, Container, Card, CardContent, CardActions, CardMedia, Typography, Checkbox, Button, Paper } from '@material-ui/core';
// import { IconButton, FavoriteIcon, ShareIcon } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from "@material-ui/core/colors";


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
        let { bookId } = useParams();

        console.log(bookId);

        console.log(data)
        if (data !== undefined) {
            console.log('blaa')

            const bookItem = data.find(book => book.id === bookId);
            console.log(bookItem)

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

        // const bookItem = data.find(book => book.id === bookId);
        // console.log(bookItem)

        console.log(id);
        console.log(cover);
        console.log(isbn);
        console.log(title);
        console.log(subTitle);
        console.log(author);
        console.log(published);
        console.log(publisher);
        console.log(pages);
        console.log(description);
        console.log(website);
        console.log(dueDate);
        console.log(complete);
        //console.log(isListItem);
        // const classes = useStyles();
        // Simulated props for the purpose of the example
        const props = { backgroundColor: 'black', color: 'white' };
        // Pass the props as the first argument of useStyles()
        const classes = useStyles(props);

        // //console.log(dueDate);

        const today = new Date();

        const dateToday = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        // //console.log(dateToday);

        if (dueDate < dateToday) {
            // //console.log("start time is lesser");
        }

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
                                    {description}
                                </Typography>}


                            </CardContent>
                        </Grid>

                    </Grid>
                }

            </Card >



        );
    }

export default Book;