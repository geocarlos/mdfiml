import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../actions';
import EntryList from './EntryList';
import Entry from './Entry';
import LettersNav from './LettersNav';
import getInitialLetters from '../utils/get_initial_letters';
import Search from './Search';
import headerImg from '../assets/images/pau_de_chuva.png';

String.prototype.capitalize = function(){return this[0].toUpperCase() + this.substring(1);};

const useStyles = makeStyles(theme => ({
    header: {
        display: 'grid',
        gridTemplateColumns: '30% 70%',
        width: '100%',
        height: '12vh',
        justifyContent: 'center',
        backgroundColor: '#e1e2ef'
    },
    headerText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold'

    },
    headerImg: {
        height: '100%',
        background: `url(${headerImg})`,
        backgroundSize: '99%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
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
    const [query, setQuery] = React.useState('');
    const [language, setLanguage] = React.useState('taurepang');
    const languages = ['taurepang', 'portuguese'];

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
        setQuery('');
    }

    const filterEntries = query => {
        const field = language === languages[0] ? 'word' : 'definition';
        return entries.filter(entry => entry[field].toLowerCase().includes(query.toLowerCase()));
    }

    return (
        <Grid container>
            <Grid className={classes.header} item xs={12}>
                <div className={classes.headerImg}></div>
                <div className={classes.headerText}>Dicionário Multimídia Taurepang-Português</div>
            </Grid>
            <Grid className={classes.item} item xs={12}>
                <Grid container>
                    <Grid className={clsx(classes.item, classes.feature)} item xs={6}>
                        <LettersNav letters={letters} setEntries={setEntries}/>
                    </Grid>
                    <Grid className={clsx(classes.item, classes.feature)} item xs={6}>
                        <Search 
                            setQuery={setQuery}
                            query={query}
                            languages={languages}
                            setLanguage={setLanguage} />
                    </Grid>
                    <Grid className={clsx(classes.item, classes.content)} item xs={4}>
                        <EntryList entries={query ? filterEntries(query) : entriesByLetter} selectEntry={setEntry} />
                    </Grid>
                    <Grid className={classes.content} item xs={8}>
                        <Entry entry={entry} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default MainView;