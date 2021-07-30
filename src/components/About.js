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
                    <Typography variant="h3">
                        Notes For Reading List App
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.box}>

                    <Typography variant="h5" >
                        I know there are many problems with this Reading List App implementation. Time constraints mean I can not address these unfortunately. But I thought I would list some of my thoughts on these issues on this page.<br /><br />
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        I had initially believed (hoped) I could complete this task very quickly, by adapting a recent, and quite similar task I was asked to complete during the Omni Property Finance LTD (OPFL) interview process. Where I was asked to create A ToDo list App with create, edit, set complete, delete, and some other filtering requirements. In which I did use Material UI (as OPFL had expressed an interest in potentially using this library going forward), axios, React-Router 4 for the paths and some other relevant libraries.<br /><br />
                    </Typography>


                    <Typography variant="body1" gutterBottom>
                        Functionality wise the Todo Application, mentioned above, had a lot more features to it EG the ability to add, edit, save Todo items to local storage... So I had thought the re-use of this, basic CRA project, as a boiler plate would be fast.<br /><br />
                    </Typography>


                    <Typography variant="body1" gutterBottom>
                        ...But I beleive I took a wrong turn with my React Router Params routing implemention ( which were not needed in the original Todo Application mentioned), which then I think led to some poor decisions in terms of where to store, and how to utilize booksData. How best to pass that booksData between the components that I had adapted (the creation of BookListFull.js and BookFull.js not good decision, as well as Book.js. I think I realised that probably only need Book.js, and better dataFlow management / logic. anyway... this is just what I was feeling, as it seems clear there is duplication and unnecessary things going on...)<br /><br />
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        So kind of realised that I needed to start the logic again, get the nested / param based routing done correctly and then think of the data flow that could simplify this application.<br /><br />
                    </Typography>


                    <Typography variant="body1" gutterBottom>
                        potentially use the useContext Hook. Which is one that I have been advised is very useful regarding passing shared data between seperate components. And that I should look into more.. Along with a lot of other things :)<br /><br />
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        I would have like to have refactored that aspect completely in an ideal world. Time contraints mentioned, and other obligations mean I have sent it as is now. Certainly a good start for where I can improve. As i say I know that there are many poor decisions. Anyway....<br /><br />
                    </Typography>

                    <Typography variant="h5" >Fetching Data Issue:</Typography>
                    <Typography variant="body1" gutterBottom>
                        I am having trouble fetching data from the url provided in the standard methods, I have used before such as using the JavaScript Fetch API, or Axios, but am recieving the following CORS error.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <i>"Access to XMLHttpRequest at 'https://hokodo-frontend-interview.netlify.com/data.json' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."</i>
                    </Typography>


                    <Typography variant="body1" gutterBottom>
                        I have come across this at various times in my carreer, so I believed there to be workarounds... which I did look for but got a bit stuck here and felt I should move on regarding time constraints.<br /><br />
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        So I did proceed with hard coded booksData object within application.<br /><br />
                    </Typography>


                    <Typography variant="body1" gutterBottom>
                        I had hoped to have time to address this data fetching issue. (I believed to be a server side problem.. I'm sure there is probably an easy fix for this I may have missed.)<br /><br />
                    </Typography>

                    <Typography variant="h5" >Incorrect Implementaion of React Router:</Typography>
                    <Typography variant="body1" gutterBottom>
                        useParams implementaion wrong. Not nesting the route to the Book View Component correctly. There are problems.<br /><br />
                    </Typography>

                    <Typography variant="h5" >Testing:</Typography>
                    <Typography variant="body1" gutterBottom>
                        I am sorry to say that in terms of testing, and specifically implementing, even some very basic Jest tests, I have not done this, my excuse is time constraint again, which is lame I know, sorry, but I certainly admit this is an area i need and wish to grow in.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        I am beginning a quite comprehensive Linked in tutorial course this weekend to help me address this area.) <a href="https://www.linkedin.com/learning/javascript-test-driven-development-es6" target="_blank" rel="noreferrer">https://www.linkedin.com/learning/javascript-test-driven-development-es6</a>. I really enjoyed working with Jest, Dom testing library, and growing my knowledge in this area over the last 10 months at OPFL for sure. Getting in the field experience with the guidance from a great Tech Lead, before he left was amazing for my learning curve here of course.<br /><br />
                    </Typography>


                    <Typography variant="h5" >VSC / Environment: Code fromatting and Prettifying Issues:</Typography>
                    <Typography variant="body1" gutterBottom>
                        I havent had time too set up my VSC environment on my MAC, regarding formatting, prettiffying etc so there are some, messy looking bits that, well are like that because in my work environment generally everything has being nicely formatted and pretified on save via eslint and some other VSC extensions, as well as in compile time on terminal etc.. Anyway apologies that it is not in a better state in this regard also...<br /><br />
                    </Typography>


                    <Typography variant="body1" gutterBottom>
                        We ask all candidates to complete this short exercise to help us evaluate their suitability for the roles we are recruiting for. We recommend spending between 2 and 4 hours. You will have an opportunity to discuss your solution, and the choices you made at the next interview stage, what you would have done with more time, what the next steps would be, etc.
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
                    </Typography>





                </Box>
            </Grid>

        </Grid>

    );
}

export default About;