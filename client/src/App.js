import React, {useEffect} from 'react'
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch} from 'react-redux';
import { getSites} from './actions/sites';
import Sites from './components/Sites/Sites';
const App = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getSites());
    },[dispatch]);
    
    return (
         <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">COVID19</Typography>
            </AppBar>
            <Sites/>
        </Container>
    );
}

export default App
