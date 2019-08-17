import React, { useState } from 'react'
import {translate} from 'react-polyglot'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1,
    marginTop: 40
  },
  paper: {
    padding: '20px',
    textAlign: 'center'
  },
  title: {
    flexGrow: 1
  },
  textField: {
    padding: 10
  },
  button: {
      paddingTop: 20
  }
}))

function Login({ t }) {
const CONNECTION_LABEL = t('connection')

  const classes = useStyles()

  const [usernameValue, setUsernameValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  return (
    <Container maxWidth='sm' className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant='h4'>{CONNECTION_LABEL}</Typography>
        <div className={classes.textField}>
          <TextField
            label="Nom d'utilisateur"
            value={usernameValue}
            onChange={event => setUsernameValue(event.target.value)}
          />
        </div>
        <div className={classes.textField}>
          <TextField
            label='Mot de passe'
            value={passwordValue}
            onChange={event => setPasswordValue(event.target.value)}
            type='password'
          />
        </div>
        <div className={classes.button}>
          <Button>Connecter</Button>
        </div>
      </Paper>
    </Container>
  )
}

export default translate()(Login)
