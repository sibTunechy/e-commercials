import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/react';


export default makeStyles(() => ({
    root: {
        mxWidth: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16.9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    
}));