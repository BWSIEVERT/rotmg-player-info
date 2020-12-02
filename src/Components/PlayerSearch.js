import React, { useState } from 'react'
import { fetchUserInfo } from '../store/actions'
import { connect } from 'react-redux'
import Header from './Header'

// Images Imports
import attackPot from '../Images/attack-potion.png'
import defensePot from '../Images/defense-potion.png'
import dexterityPot from '../Images/dexterity-potion.png'
import lifePot from '../Images/life-potion.png'
import manaPot from '../Images/mana-potion.png'
import speedPot from '../Images/speed-potion.png'
import vitalityPot from '../Images/vitality-potion.png'
import wisdomPot from '../Images/wisdom-potion.png'


// Material-UI imports:
import { Typography } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


const PlayerSearch = (props) => {

    //Material-UI Styling:
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(12),
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
    table: {
      minWidth: 650,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    rootTwo: {
      flexGrow: 1,
      width: '100%',
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

<Header />
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
        <Typography variant='body2' component='p'>
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
        <Typography variant='body2' component='p'>
          Guild: <strong>{props.data.guild}</strong>
          <br></br>
          <br></br>
          Guild Rank: <strong>{props.data.guild_rank}</strong>
        </Typography>
      </CardContent>
    </Card>
    </Container>

    {props.characters.map(item => (
      <>
      <div className={classes.rootTwo}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h6' className={classes.title}>
            {item.class}
          </Typography>
          <div className={classes.demo}>
            <List>
              <ListItem>
              <ListItemText primary='Weapon:' secondary={item.equips.weapon}>
                </ListItemText>
                <ListItemText primary='Ability:' secondary={item.equips.ability}>
                </ListItemText>
                <ListItemText primary='Armor:' secondary={item.equips.armor}>
                </ListItemText>
                <ListItemText primary='Ring:' secondary={item.equips.ring}>
                </ListItemText>
                <ListItemText primary='Pet:' secondary={item.pet}>
                </ListItemText>
                <ListItemText primary='Rank:' secondary={item.place}>
                </ListItemText>
              </ListItem>
            </List>
          </div>
          <Grid item xs={12}>
            <div className={classes.demo}>
              <List>

                {/* Attack */}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={attackPot} alt='Attack Potion' />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.stats.attack}>
                  </ListItemText>
                </ListItem>

                {/* Defense */}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={defensePot} alt='Defence Potion' />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.stats.defense}>
                  </ListItemText>
                </ListItem>

                {/* Dexterity */}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={dexterityPot} alt='Dexterity Potion' />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.stats.dexterity}>
                  </ListItemText>
                </ListItem>

                {/* Life */}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={lifePot} alt='Life Potion' />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.stats.hp}>
                  </ListItemText>
                </ListItem>

                {/* Mana */}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={manaPot} alt='Mana Potion' />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.stats.mp}>
                  </ListItemText>
                </ListItem>

                {/* Speed */}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={speedPot} alt='Speed Potion' />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.stats.speed}>
                  </ListItemText>
                </ListItem>

                {/* Vitality */}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={vitalityPot} alt='Vitality Potion' />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.stats.vitality}>
                  </ListItemText>
                </ListItem>

                {/* Wisdom */}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={wisdomPot} alt='Wisdom Potion' />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.stats.wisdom}>
                  </ListItemText>
                </ListItem>

              </List>
            </div>
          </Grid>
        </Grid>
      </Grid>
      </div>
      </>
    ))}
    </>

  );
}

const mapStateToProps = (state) => {
    return {
      isLoading: state.isLoading,
      data: state.data,
      characters: state.characters,
    };
  };
  
export default connect(mapStateToProps, { fetchUserInfo })(PlayerSearch);

