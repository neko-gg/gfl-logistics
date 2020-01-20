import {makeStyles} from '@material-ui/core';

const fontStyle = () => ({
    fontSize: '0.875rem',
    fontWeight: '400',
    fontFamily: "'Roboto', sans-serif;"
});

export const useStyles = makeStyles(theme => ({
    root: {
        width: '80em',
        maxWidth: '100%',
        margin: '0 auto',
        ...fontStyle()
    },
    "@global": {
        "[id^=react-joyride-step-]": {
            ...fontStyle(),
            "& button": {
                ...fontStyle(),
                "&[data-action=primary]": {
                    backgroundColor: theme.palette.primary.main + ' !important'
                },
                "&[data-action=back]": {
                    color: theme.palette.text.primary + ' !important'
                },
                "&[data-action=skip]": {
                    color: theme.palette.secondary.main + ' !important'
                }
            }
        }
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1,
        fontSize: '1.1rem',
        fontWeight: '500',
        lineHeight: '1.6',
        letterSpacing: '0.0075em'
    },
    drawerList: {
        width: '15em',
        maxWidth: '80vw'
    },
    dialogContent: {
        maxWidth: '70vw',
        width: '50em',
        padding: theme.spacing(2)
    },
    dialogPaper: {
        padding: theme.spacing(2),
        '&:not(:last-of-type)': {
            marginBottom: theme.spacing(2)
        }
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        float: 'right'
    },
    importantContent: {
        fontWeight: '500'
    },
    slider: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    results: {
        width: '100%'
    }
}));
