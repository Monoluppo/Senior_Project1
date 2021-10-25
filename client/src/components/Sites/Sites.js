import React from 'react'
import { useSelector } from 'react-redux';

//import useStyles from './styles';
import Site from './Site/Site';

const Sites = () => {
    const sites = useSelector((state) => state.sites);
    //const classes = useStyles();
    console.log(sites);
    return(
        <>
        <h1>Sites</h1>
        <Site />
        <Site />
        </>
    );
};

export default Sites;