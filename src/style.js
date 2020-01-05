import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    root: {
        width: '80em',
        maxWidth: '100%',
        margin: '0 auto',
        fontSize: '0.875rem',
        fontWeight: '400',
        fontFamily: "'Roboto', sans-serif;"
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        float: 'right'
    },
    answer: {
        position: 'absolute',
        color: 'rgba(0, 0, 0, 0.71)',
        fontWeight: '500'
    },
    importantContent: {
        fontWeight: '500'
    },
    importantAnswer: {
        fontWeight: '700',
        color: 'rgba(0, 0, 0, 0.89)'
    },
    slider: {
        width: '100%'
    },
    sliderLabel: {
        width: '8em',
        minWidth: '5em',
        textAlign: 'right'
    },
    sliderDescription: {
        marginBottom: '1.5em'
    },
    stepLabel: {
        textAlign: 'left'
    },
    labelledSlider: {
        display: 'flex',
        alignItems: 'center',
        height: '5em',
        '& $slider': {
            marginLeft: '1em',
            top: '0.125em'
        }
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: '3.5em',
        fontWeight: '500'
    },
    stepper: {
        marginBottom: '4em'
    }
}));
