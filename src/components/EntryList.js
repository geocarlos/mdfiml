import React from 'react';
import { List, ListItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    entryList: {
        maxHeight: 'calc(100% - 10px)',
        overflow: 'auto',
        fontSize: '1.2rem'
    }
}))


const EntryList = ({entries}) => {
    const classes = useStyles();

    return (
        <List className={classes.entryList} component="div">
            {Array.isArray(entries) && entries.map(entry => (
                <ListItem button key={entry.word}>
                    {entry.word}
                </ListItem>
            ))}
        </List>
    )
}

export default EntryList;