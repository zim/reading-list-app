import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, Container, Box, Button, Modal, Backdrop, Fade, Typography } from '@material-ui/core';

// cloud name dg8ckygz0
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        minWidth: 600,
        margin: '0px!important',
    },
    listItemText: {
        border: '2px solid red',
        alignItems: 'left',
        justifyContent: 'left',
    },
    todolist: {
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


const About = (props) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.boxContainer}>

            <Grid item xs={12} className={clsx(classes.grid)}>
                <Box className={classes.box}>
                    <Typography variant="h1">
                        About
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.box}>
                    <Typography variant="body1" gutterBottom>
                        We ask all candidates to complete this short exercise to help us evaluate their suitability for the roles we are recruiting for. We recommend spending between 2 and 4 hours. You will have an opportunity to discuss your solution, and the choices you made at the next interview stage, what you would have done with more time, what the next steps would be, etc.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        So I have used some libraries. Axios, I am having trouble wioth CORS so I have proceded with data endpoint. Will come back to this hopefully.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Then thought I would use React-Router 4 for the paths
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        ## Reading list<br />
                        Create an application to display a recommended reading list using [React](https://reactjs.org/) and any suitable libraries.<br /><br />
                        ### Acceptance criteria<br />
                        * Fetch data from https://hokodo-frontend-interview.netlify.com/data.json<br /><br />

                        * Display the list of books on a page, each book item showing<br />
                        - Book title<br />
                        - Author name<br />
                        - Cover image (thumbnail size)
                        - 'More information' link<br />

                        * Clicking on the 'More information' link should open another page showing<br /><br />
                        - Book title<br />
                        - Author name<br />
                        - ISBN<br />
                        - Cover image (full size)<br />
                        - A list of book titles by the same Author (with links)<br />
                        - 'Back to list' link<br />

                        ### Requirements<br /><br />
                        A good solution will<br />
                        * satisfy the acceptance criteria<br />
                        * work on common web browsers<br />
                        * have good test coverage<br />
                        * have a functional user experience and design * use _appropriate_ front end libraries<br />
                        * be production ready<br /><br />
                        Please send us your solution or put it on a repository hosting service such as [GitHub](https://github.com) or [GitLab](https://gitlab.com) and don't forget to include a README file to tell us how to build and run the application.
                        <br /><br />
                        Having a problem fetching data from the url. recieving the following CORS error. So decided to proceed by hard coding booksData object into application,

                        I am afraid this imlementation is not done in the most efficient way.

                        Concering the ReadingList component, the  Book component and the 2 components BookFull and <BookListFull>
                            I realised that I neeed to really start the logic again.

                            I had actually thought I could do this quickluu by adapting a recent, and quite similar task for OPFL, which i use Material ui, axios, and other basic fucntionality but i took a wrong turn with my React Router Params routing, So would have like to have reafactored that aspect completely in an ideal world. Anyway. due to time contraindt and other obligations I have I have sent it as is. Perhaps a good start for wher I can improve ... AS i say I know that ther areprobles // anyway.

                            thanks.

                            I am sorry to say that in terms of testing, and specifically implementing some Jest tests, I have not done this my excuse is time constraint again, which is trus , but I certainly admit this is an area i need to grow in, and wish to grow in. I really enjoyed working with Jest, Dom testing library, and growing my knowledge in this area over the last 10 months at OPFL for sure. Geting in the field experience with the guidance from a great Tech Lead, who unfortunately left.


                        </BookListFull>

                    </Typography>





                </Box>
            </Grid>

        </Grid>

    );
}

export default About;