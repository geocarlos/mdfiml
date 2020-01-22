import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../actions';
import EntryList from './EntryList';
import Entry from './Entry';
import LettersNav from './LettersNav';
import getInitialLetters from '../utils/get_initial_letters';

const useStyles = makeStyles(theme => ({
    header: {
        height: '12vh'
    },
    feature: {
        height: '7vh'
    },
    item: {
        border: 'solid thin lightgrey'
    },
    content: {
        height: '80vh'
    }
}))

const MainView = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const entries = useSelector(state => state.entries);
    const [entry, setEntry] = React.useState({});
    const [entriesByLetter, setEntriesByLetter] = React.useState([]);
    const [letters, setLetters] = React.useState([]);

    React.useEffect(() => {
        actions.fetchEntries()(dispatch);
    }, [dispatch]);

    React.useEffect(() => {
        setEntry(entries[0]);
        if(!Array.isArray(entries)) return;
        getInitialLetters(entries.map(e => e.word))
            .then(_letters => {
                setLetters(Array.from(_letters));
                setEntries('a')
            })
            .catch(() => window.alert('Something wrong.'))
    }, [entries]);

    const setEntries = letter => {
        const displayedEntries = entries.filter(e => e.word[0] === letter);
        setEntriesByLetter(displayedEntries);
        setEntry(displayedEntries[0])
    }

    return (
        <Grid container>
            <Grid className={clsx(classes.item, classes.header)} item xs={12}>Header</Grid>
            <Grid className={classes.item} item xs={12}>
                <Grid container>
                    <Grid className={clsx(classes.item, classes.feature)} item xs={6}>
                        <LettersNav letters={letters} setEntries={setEntries}/>
                    </Grid>
                    <Grid className={clsx(classes.item, classes.feature)} item xs={6}>Choose search language</Grid>
                    <Grid className={clsx(classes.item, classes.content)} item xs={4}>
                        <EntryList entries={entriesByLetter} selectEntry={setEntry} />
                    </Grid>
                    <Grid className={clsx(classes.item, classes.content)} item xs={8}>
                        <Entry entry={entry} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default MainView;