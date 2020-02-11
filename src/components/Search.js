import React from 'react';
import { Select, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '100px 100px auto'
    },
    langOption: {
        padding: '.5em',
        '&:hover': {
            backgroundColor: '#eee',
            cursor: 'pointer'
        }
    },
    searchItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3px'
    }
}))

const Search = ({ setQuery, query, languages, setLanguage }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.searchItem}>Buscar em: </div>
            <div className={classes.searchItem}>
                <Select onChange={event => setLanguage(event.target.value)} defaultValue={languages[0]}>
                    {languages.map((lang, i) => (
                        <option className={classes.langOption} key={i} value={lang}>{lang.capitalize()}</option>
                    ))}
                </Select>
            </div>
            <div className={classes.searchItem}>
                <TextField
                    value={query}
                    size="small"
                    fullWidth
                    variant="outlined"
                    onChange={event => setQuery(event.target.value)} />
            </div>
        </div>
    )
}

export default Search;