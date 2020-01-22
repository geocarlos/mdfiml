import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    navLettersList: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px'
    },
    navLettersItem: {
        padding: '4px 8px',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#ddd'
        }
    }
}))

const LettersNav = ({letters, setEntries}) => {
    const classes = useStyles();
    return (
        <div className={classes.navLettersList}>
            {Array.isArray(letters) && letters.map(letter => (
                <div key={letter} className={classes.navLettersItem} onClick={() => setEntries(letter)}>
                    {letter}
                </div>
            ))}
        </div>
    );
};

export default LettersNav;