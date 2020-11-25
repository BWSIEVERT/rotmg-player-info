import React, { useState, useEffect } from "react";
import { fetchUserInfo } from "./store/actions";
import { connect } from "react-redux";
import "./App.css";
import { findByLabelText } from "@testing-library/react";

// Material-UI imports:
import { Typography } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

function App(props) {
  //Material-UI Styling:
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    root: {
      marginTop: theme.spacing(6)
    },
  }));
  const classes = useStyles();

  const [form, setForm] = useState({
    username: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.fetchUserInfo(form.username);
  };

  return (
    <>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          User Search
        </Typography>
        <form onSubmit={onSubmit} className={classes.form} autoComplete="off">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={form.username}
            onChange={onChange}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Look up
          </Button>
        </form>
      </div>
    </Container>

    <Container component="main" maxWidth="xs">
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
           Player: {props.data.player}
          <hr></hr>
        </Typography>
        <Typography varaint='body2' component='p'>
          Last Seen: <strong>{props.data.player_last_seen}</strong>
          <br></br>
          <br></br>
          Total Fame: <strong>{props.data.account_fame}</strong>
          <br></br>
          <br></br>
          Fame Rank: #<strong>{props.data.account_fame_rank}</strong>
          <br></br>
          <br></br>
          Number of Characters: <strong>{props.data.chars}</strong>
          <br></br>
          <br></br>
          Profile Descriptions: 
          <br></br>
          Desc. 1 - <strong>{props.data.desc1}</strong>
          <br></br>
          Desc. 2 - <strong>{props.data.desc2}</strong>
          <br></br>
          Desc. 3 - <strong>{props.data.desc3}</strong>
          <br></br>
          <br></br>
          Donator: {props.data.donator === false ? <strong>No</strong> : <strong>Yes</strong>}
        </Typography>
      </CardContent>
    </Card>
    </Container>

    <Container component="main" maxWidth="xs">
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          User Guild Status Information
        </Typography>
        <Typography varaint='body2' component='p'>
          Guild: <strong>{props.data.guild}</strong>
          <br></br>
          <br></br>
          Guild Rank: <strong>{props.data.guild_rank}</strong>
        </Typography>
      </CardContent>
    </Card>
    </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    data: state.data,
  };
};

export default connect(mapStateToProps, { fetchUserInfo })(App);
