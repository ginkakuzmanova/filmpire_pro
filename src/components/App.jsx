import {CssBaseline} from '@mui/material';
import {Route, Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import Movies from "./Movies";
import MovieInformation from "./MovieInformation";
import Actors from "./Actors";
import ProfileInformation from "./ProfileInformation";

import useStyles from './styles';

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <NavBar/>
            <main className={classes.content}>
                <Switch>
                    <Route exact path="/">
                        <Movies/>
                    </Route>
                    <Route exact path="/movie/:id">
                        <MovieInformation/>
                    </Route>
                    <Route exact path="/actors/:id">
                        <Actors/>
                    </Route>
                    <Route exact path="/profile/:id">
                        <ProfileInformation/>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
