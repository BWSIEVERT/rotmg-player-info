import React from 'react'

// Material-UI Imports:
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// Material-UI Styling:
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = () => {

    const classes = useStyles()


    return (

        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' className={classes.title}>
                    ROTMG-STATS
                </Typography>
                <Button href='/' color='inherit'>
                    Player Search
                </Button>
                <Button href='/guide' color='inherit'>
                    Guide
                </Button>
            </Toolbar>
        </AppBar>

        // <div>
        //     <nav>
        //         <a href='/register'>Register</a>
        //         <a href='/login'>Login</a>
        //         <button onClick={onLogOut}>
        //             Log out
        //         </button>
        //     </nav>
        // </div>
    )
}

export default Header