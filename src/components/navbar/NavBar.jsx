import React from 'react';
import {AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery} from "@mui/material";
import {Menu, AccountCircle, Brightness4, Brightness7} from "@mui/icons-material";
import { useTheme } from '@mui/styles'
import {Link} from "react-router-dom";
import useStyles from "./styles";

export default function NavBar(props) {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 600px)');
    const theme = useTheme();
    const isAuthenticated = true;

    return (
        <nav>
            <AppBar position="fixed" style={{ marginBottom: '1990px' }}>
                <Toolbar className={classes.toolbar}>
                    {isMobile &&
                        (<IconButton
                        color='inherit'
                        edge="start"
                        style={{outline: 'none'}}
                        onClick={() => {
                    }} className={classes.menuButton}><Menu/></IconButton>)}
                    <IconButton color="inherit" onClick={() => {}} sx={{ ml: 1 }}>
                        { theme.palette.mode === 'dark' ? <Brightness7/> : <Brightness4/> }
                    </IconButton>
                    { !isMobile && 'SEARCH' }
                    <div>
                        { !isAuthenticated ? (<Button color="inherit" onClick={() =>{}}>Login &nbsp; <AccountCircle/></Button>)
                            : (<Button color="inherit" component={Link} to={`/profile/:id`} className={classes.linkButton}>
                                { !isMobile && <> My Movies  &nbsp;</> }
                                <Avatar style={{ width: 30, height: 30 }} alt="profile image"/>
                            </Button>)}
                    </div>
                </Toolbar>
            </AppBar>
        </nav>
    );
}

