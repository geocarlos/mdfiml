import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../actions';
import EntryList from './EntryList';

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

    React.useEffect(() => {
        actions.fetchEntries()(dispatch);
    }, [dispatch]);

    return (
        <Grid container>
            <Grid className={clsx(classes.item, classes.header)} item xs={12}>Header</Grid>
            <Grid className={classes.item} item xs={12}>
                <Grid container>
                    <Grid className={clsx(classes.item, classes.feature)} item xs={6}>Choose letter</Grid>
                    <Grid className={clsx(classes.item, classes.feature)} item xs={6}>Choose search language</Grid>
                    <Grid className={clsx(classes.item, classes.content)} item xs={4}>
                        <EntryList entries={entries} />
                    </Grid>
                    <Grid className={clsx(classes.item, classes.content)} item xs={8}>Field for entry definition</Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default MainView;