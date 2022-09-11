import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';


export default function Create() {
  return (
    <div>
      <Typography variant='h6' color ='textSecondary' component='h2' gutterBottom>
        Create a new Note
      </Typography>
      <Button  type="submit" color="primary">
        SUBMIT
      </Button>
      <Button  type="submit" color="secondary" variant="outlined">
        SUBMIT
      </Button>
      <ButtonGroup color='secondary' variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  )
}
