import React from 'react';
import { Grid, makeStyles, IconButton } from '@material-ui/core';
import { PlayCircleFilled } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: '16pt',
        padding: '2rem',
        lineHeight: '32px',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'auto'
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

    const [image, setImage] = React.useState('');
    const audioRef = React.useRef();
    const e_audioRef = React.useRef();

    React.useEffect(() => {
        try {
            const _audio = require(`../assets/audio/${entry.audio}`);
            ((audioRef || {}).current || {}).src = _audio;
        } catch (error) {
            ((audioRef || {}).current || {}).src = '';
        }
        try {
            const _eaudio = require(`../assets/audio/${entry.e_audio}`);
            ((e_audioRef || {}).current || {}).src = _eaudio;
        } catch (error) {
            ((e_audioRef || {}).current || {}).src = '';
        }
        try {
            setImage(require(`../assets/images/${entry.image}`));
        } catch (error) {
            setImage('');
        }
    }, [entry]);

    const playSound = ref => {
        ref.current.play();
    }

    return (
        <Grid className={classes.root} container>
            <Grid item xs={12}>
                {entry.image && <img width="300" src={image} />}
            </Grid>
            <Grid item xs={8}><span className={classes.entry}>{entry.word}</span> {entry.ipa_word && <span className={classes.ipa}>[{entry.ipa_word}]</span>}</Grid>
            <Grid item xs={4}>
                {entry.audio && <div>
                    <audio ref={audioRef}>
                        <source src="" type="audio/wav" />
                    </audio>
                    <IconButton onClick={() => playSound(audioRef)}>
                        <PlayCircleFilled />
                    </IconButton>
                </div>}
            </Grid>
            <Grid item xs={12} style={{ padding: '1rem' }}>
                <span className={classes.grammarInfo}>{entry.grammar_info}</span> {entry.definition}
            </Grid>
            <Grid className={classes.exampleContainer} container>
                <Grid item xs={12} style={{ fontWeight: 'bold' }}>Example</Grid>
                <Grid className={classes.example} item xs={8} style={{ fontWeight: 'bold' }}>{entry.example}</Grid>
                <Grid item xs={4}>
                    {entry.e_audio && <div>
                        <audio ref={e_audioRef}>
                            <source src="" type="audio/wav" />
                        </audio>
                        <IconButton onClick={() => playSound(e_audioRef)}>
                            <PlayCircleFilled />
                        </IconButton>
                    </div>
                    }
                </Grid>
                <Grid className={classes.example} item xs={12} style={{ fontStyle: 'italic' }}>{entry.translation}</Grid>
            </Grid>
        </Grid>
    );
}

export default Entry;