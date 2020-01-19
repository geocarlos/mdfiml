import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: '16pt',
        padding: '2rem',
        lineHeight: '32px'
    },
    entry: {
        fontSize: '20pt',
        fontWeight: 'bold'
    },
    ipa: {
        color: '#d22'
    },
    grammarInfo: {
        fontStyle: 'italic'
    },
    exampleContainer: {
        padding: '1rem'
    },
    example: {
        padding: '.5rem'
    }
}));

const Entry = ({ entry = {} }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.root} container>
            <Grid item xs={12}><span className={classes.entry}>{entry.word}</span> {entry.ipa_word && <span className={classes.ipa}>[{entry.ipa_word}]</span>}</Grid>
            <Grid item xs={12} style={{ padding: '1rem' }}>
                <span className={classes.grammarInfo}>{entry.grammar_info}</span> {entry.definition}
            </Grid>
            <Grid className={classes.exampleContainer} container>
                <Grid item xs={12} style={{ fontWeight: 'bold' }}>Example</Grid>
                <Grid className={classes.example} item xs={12} style={{ fontWeight: 'bold' }}>{entry.example}</Grid>
                <Grid className={classes.example} item xs={12} style={{ fontStyle: 'italic' }}>{entry.translation}</Grid>
            </Grid>
        </Grid>
    );
}

export default Entry;